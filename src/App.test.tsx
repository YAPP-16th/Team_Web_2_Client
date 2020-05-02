import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./modules";
import { Router } from "react-router-dom";

const store = createStore(rootReducer);

describe("Routing Test", () => {
  it("Zone Search Page Render", () => {
    const history = createMemoryHistory();
    history.push("/search?key=value");
    const { container, getByText } = render(
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    );
    expect(container.innerHTML).toMatch("검색되었습니다");
  });

  it("Zone Detail Page Render", () => {
    const history = createMemoryHistory();
    history.push("/search?key=value#/zone/1/timecompare");
    const { container, getByText } = render(
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    );
    expect(container.innerHTML).toMatch("시간비교");
  });
});
