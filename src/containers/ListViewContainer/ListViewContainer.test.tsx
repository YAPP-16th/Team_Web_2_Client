import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ListViewContainer from "./ListViewContainer";

import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../../modules";
import { Router } from "react-router-dom";

import { createMemoryHistory } from "history";

const store = createStore(rootReducer);

describe("<ListViewContainer />", () => {
  it("드래그 동작에 의한 애니메이션 처리", () => {
    const history = createMemoryHistory();
    history.push("/search?key=value");
    const utils = render(
      <Provider store={store}>
        <Router history={history}>
          <ListViewContainer />
        </Router>
      </Provider>
    );

    const toggleButton = utils.getByText("리스트뷰 +");
    fireEvent.click(toggleButton);
    utils.findByText("리스트뷰 -")
      // .then((element) => {
      //   console.log("element.clientTop", element.clientTop);
      //   // expect(element.clientTop).toBe('리스트뷰')
      // });
  });

  it("ZONE 선택 시 상세페이지로 이동", () => {
    const history = createMemoryHistory();
    history.push("/search?key=value");
    const utils = render(
      <Provider store={store}>
        <Router history={history}>
          <ListViewContainer />
        </Router>
      </Provider>
    );
  });
});
