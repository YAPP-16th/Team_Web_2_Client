import React from "react";
import { render } from "@testing-library/react";
import { renderHook, act } from "@testing-library/react-hooks";
import Modal from "./Modal";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../../modules";
import modalHooks from "./ModalHooks";

describe("Modal 컴포넌트", () => {
  describe("import 했을 시", () => {
    it("Modal이 정상적으로 load 되었다.", () => {
      expect(Modal).not.toBeNull();
      expect(Modal).not.toBeUndefined();
      expect(Modal).toBeDefined();
    });
  });

  describe("사용 했을 때", () => {
    const store = createStore(rootReducer);

    it("초기값이 정상적으로 설정 되었다.", () => {
      const DEFAULT_VALUES = {
        section_id: "Modal",
        div_id: "ModalContainer",
        backgroundColor: "rgba(0, 0, 0, 0.6)"
      };
      const { container } = render(
        <Provider store={store}>
          <Modal></Modal>
        </Provider>
      );
      const section = container.firstChild as HTMLElement;
      expect(section.tagName).toEqual("SECTION");
      expect(section.id).toEqual(DEFAULT_VALUES.section_id);
    });
    it("사용자 설정값이 정상적으로 설정 되었다.", () => {
      const DEFAULT_VALUES = {
        section_id: "Modal",
        div_id: "ModalContainer",
        backgroundColor: "yellow"
      };
      const { container } = render(
        <Provider store={store}>
          <Modal
            backgroundColor={DEFAULT_VALUES.backgroundColor}
          ></Modal>
        </Provider>
      );
      const section = container.firstChild as HTMLElement;
      expect(section.tagName).toEqual("SECTION");
      expect(section.id).toEqual(DEFAULT_VALUES.section_id);
    });

    const setup = (defaultProps) => {
      return renderHook(() => modalHooks(), {
        initialProps: defaultProps,
        wrapper: ({ children }) => {
          return <Provider store={store}>{children}</Provider>;
        },
      });
    };

    it("Custom Hook 테스트", () => {
      const initProps = {
        container: undefined,
        bShow: false,
      };
      const { result, rerender, waitForNextUpdate } = setup(initProps);
      expect(result.current.bShow).toBe(false);
      expect(result.current.container).toBeUndefined();
      expect(result.current.openModal).toBeDefined();
      expect(result.current.closeModal).toBeDefined();
      expect(result.current.setContainer).toBeDefined();
      act(() => {
        result.current.openModal();
        result.current.setContainer(<div>test</div>);
      })
      expect(result.current.bShow).toBe(true);
      expect(result.current.container).not.toBeUndefined();
      expect(result.current.container).toEqual(<div>test</div>)
      act(() => {
        result.current.closeModal();
        result.current.setContainer(undefined);
      })
      expect(result.current.bShow).toBe(false);
      expect(result.current.container).toBeUndefined();
    });
  });
});
