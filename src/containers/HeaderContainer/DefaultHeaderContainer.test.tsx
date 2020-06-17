import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { renderHook, act } from "@testing-library/react-hooks";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../../modules";

import DefaultHeaderContainer from "./DefaultHeaderContainer";
import modalHooks from "../../hooks/ModalHooks";

describe("<DefaultHeaderContainer />", () => {
  const store = createStore(rootReducer);

  it("홈으로 이동하기(랜딩 페이지)", () => {
    const history = createMemoryHistory();
    history.push("/search");
    const utils = render(
      <Provider store={store}>
        <Router history={history}>
          <DefaultHeaderContainer />
        </Router>
      </Provider>
    );

    const goHomeLogo = utils.getByTestId("go-back");
    fireEvent.click(goHomeLogo);
  });

  it("검색 페이지로 이동", () => {
    const history = createMemoryHistory();
    const utils = render(
      <Provider store={store}>
        <Router history={history}>
          <DefaultHeaderContainer />
        </Router>
      </Provider>
    );
    const svgs = utils.container.getElementsByTagName("svg");
    let search: HTMLElement;
    for (let i of svgs) {
      if (i.innerHTML === "icon-search.svg") search = i.parentElement;
    }

    fireEvent.click(search);
    expect(history.location.pathname).toBe("/search");
  });

  it("메인메뉴 모달창 show/hide", () => {
    const initProps = {
      container: undefined,
      bShow: false,
    };
    const history = createMemoryHistory();
    const setup = (defaultProps) => {
      return renderHook(() => modalHooks(), {
        initialProps: defaultProps,
        wrapper: ({ children }) => {
          return <Provider store={store}>{children}</Provider>;
        },
      });
    };
    const { result } = setup(initProps);
    const utils = render(
      <Provider store={store}>
        <Router history={history}>
          <DefaultHeaderContainer />
        </Router>
      </Provider>
    );

    const svgs = utils.container.getElementsByTagName("svg");
    let menu: HTMLElement;
    for (let i of svgs) {
      if (i.innerHTML === "icon-menu.svg") menu = i.parentElement;
    }
    expect(result.current.bShow).toBe(false);
    expect(result.current.container).toBeUndefined();
    act(() => {
      fireEvent.click(menu);
    });
    expect(result.current.bShow).toBe(true);
    expect(result.current.container).not.toBeUndefined();
    act(() => {
      result.current.closeModal();
    });
    expect(result.current.bShow).toBe(false);
  });
});
