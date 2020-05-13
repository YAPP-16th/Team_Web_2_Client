import React from "react";
import { render } from "@testing-library/react";
import LoadingSpinner from "./LoadingSpinner";

const DEFAULT_VALUES = {
  id: "loadingSpinner",
  width: "100px",
  height: "100px",
  actionAnimation: true,
  speed: 2,
};

describe("Loading Spinner 컴포넌트", () => {
  describe("import 했을 시", () => {
    it("정상적으로 Load 되었다.", () => {
      expect(LoadingSpinner).not.toBeNull();
      expect(LoadingSpinner).not.toBeUndefined();
      expect(LoadingSpinner).toBeDefined();
    });
  });

  describe("사용 했을 때", () => {
    it("초기값이 없는 경우 기본값이 정상적으로 설정 되었다.", () => {
      const { container } = render(<LoadingSpinner />);
      const child = container.lastChild as HTMLElement;

      expect(container.innerHTML).not.toEqual("");
      expect(container.innerHTML).toMatch(`id="` + DEFAULT_VALUES.id + `"`);
      expect(container.innerHTML).toMatch(
        `width="` + DEFAULT_VALUES.width + `"`
      );
      expect(container.innerHTML).toMatch(
        `height="` + DEFAULT_VALUES.height + `"`
      );
      expect(child).toBeDefined();
      expect(child).not.toBeUndefined();
      expect(child.innerHTML).not.toEqual("");
      expect(child.innerHTML).toMatch(`width="` + DEFAULT_VALUES.width + `"`);
      expect(child.innerHTML).toMatch(`height="` + DEFAULT_VALUES.height + `"`);
      expect(child.innerHTML).toMatch(`speed="` + DEFAULT_VALUES.speed + `"`);
      expect(child.innerHTML).toMatch(
        `animation="` + DEFAULT_VALUES.actionAnimation + `"`
      );
      expect(child.innerHTML).toMatch(`img-logo-spinner.svg`);
    });
    it("애니메이션 실행 설정 시 해당 값이 적용 되었다.", () => {
      const CUSTOM_DATA = {
        id: "custom_spinner",
        width: "200px",
        height: "200px",
        actionAnimation: false,
        speed: 5,
      };
      const { container } = render(
        <LoadingSpinner
          id={CUSTOM_DATA.id}
          width={CUSTOM_DATA.width}
          height={CUSTOM_DATA.height}
          actionAnimation={CUSTOM_DATA.actionAnimation}
          speed={CUSTOM_DATA.speed}
        />
      );
      const child = container.lastChild as HTMLElement;

      expect(container.innerHTML).not.toEqual("");
      expect(container.innerHTML).toMatch(`id="` + CUSTOM_DATA.id + `"`);
      expect(container.innerHTML).toMatch(`width="` + CUSTOM_DATA.width + `"`);
      expect(container.innerHTML).toMatch(
        `height="` + CUSTOM_DATA.height + `"`
      );
      expect(child).toBeDefined();
      expect(child).not.toBeUndefined();
      expect(child.innerHTML).not.toEqual("");
      expect(child.innerHTML).toMatch(`width="` + CUSTOM_DATA.width + `"`);
      expect(child.innerHTML).toMatch(`height="` + CUSTOM_DATA.height + `"`);
      expect(child.innerHTML).toMatch(`speed="` + CUSTOM_DATA.speed + `"`);
      expect(child.innerHTML).toMatch(
        `animation="` + CUSTOM_DATA.actionAnimation + `"`
      );
      expect(child.innerHTML).toMatch(`img-logo-spinner.svg`);
    });
  });
});
