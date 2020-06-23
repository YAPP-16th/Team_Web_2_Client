import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { createMemoryHistory, createBrowserHistory } from "history";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./modules";
import { Router } from "react-router-dom";

describe("Routing Test", () => {
  it("검색 페이지 라우팅 Test", () => {
    const store = createStore(rootReducer);
    const history = createMemoryHistory();
    history.push("/search");
    const { container } = render(
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    );
  });

  it("검색 결과 페이지 라우팅 Test", () => {
    const store = createStore(rootReducer);
    const history = createMemoryHistory();
    history.push("/search?key=value");
    const { container } = render(
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    );
    expect(container.innerHTML).toMatch(/id="Modal"/);
  });

  it("Zone 자세히 보기 페이지 라우팅 Test", () => {
    const store = createStore(rootReducer);
    const history = createBrowserHistory();
    history.push("/search?key=value#/1/timecompare");
    const { container } = render(
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    );

    // expect(container.innerHTML).toMatch("시간비교");
  });
});
