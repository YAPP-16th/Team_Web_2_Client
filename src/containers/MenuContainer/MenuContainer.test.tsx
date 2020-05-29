import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import rootReducer from "../../modules";
import MenuContainer from "./MenuContainer";

const DEFAULT_VALUES = {
  close: "icon-close.svg",
  spanText: ["찾아 ZONE", "서비스 소개", "공지사항", "문의하기"],
};

describe("MenuContainer", () => {
  describe("import 했을 시", () => {
    it("정상적으로 Load 되었다.", () => {
      expect(MenuContainer).not.toBeNull();
      expect(MenuContainer).not.toBeUndefined();
      expect(MenuContainer).toBeDefined();
    });
  });

  describe("사용 했을 때", () => {
    it("초기값이 정상적으로 설정 되었다.", () => {
      const store = createStore(rootReducer);
      const history = createMemoryHistory();
      const { container } = render(
        <Provider store={store}>
          <Router history={history}>
            <MenuContainer />
          </Router>
        </Provider>
      );

      const svg = container.getElementsByTagName("svg")[0];
      expect(svg).toBeDefined();
      expect(svg.innerHTML).toEqual(DEFAULT_VALUES.close);

      const menuDiv = svg.parentNode.parentNode.parentNode.lastChild as HTMLElement;
      const spans = menuDiv.getElementsByTagName("span");

      for (let i = 0; i < spans.length; i++) {
        expect(spans[i].textContent).toEqual(DEFAULT_VALUES.spanText[i]);
      }

      const footer = container.lastChild.lastChild.lastChild as HTMLElement;
      expect(footer).not.toBeUndefined();
      expect(footer).toBeDefined();
    });
  });
});
