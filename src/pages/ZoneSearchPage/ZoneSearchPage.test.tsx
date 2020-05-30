import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import rootReducer from "../../modules";
import ZoneSearchPage from "./ZoneSearchPage";

describe("ZoneSearchPage 페이지", () => {
  describe("import 했을 시", () => {
    it("정상적으로 Load 되었다.", () => {
      expect(ZoneSearchPage).not.toBeNull();
      expect(ZoneSearchPage).not.toBeUndefined();
      expect(ZoneSearchPage).toBeDefined();
    });
  });

  describe("사용 했을 때", () => {
    it("검색이 없는 경우 search페이지가 로딩 되었다.", () => {
      const store = createStore(rootReducer);
      const history = createBrowserHistory();
      const { container } = render(
        <Provider store={store}>
          <Router history={history}>
            <ZoneSearchPage></ZoneSearchPage>
          </Router>
        </Provider>
      );
    });
  });
});
