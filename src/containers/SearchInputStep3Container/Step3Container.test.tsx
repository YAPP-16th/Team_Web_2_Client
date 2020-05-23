import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Step3Container from "./Step3Container";
import SearchInputLoadingContainer from "../SearchInputLoadingContainer/SearchInputLoadingContainer"

import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../../modules";
import { Router } from "react-router-dom";

import { createMemoryHistory } from "history";

const store = createStore(rootReducer);

describe("<Step3Container />", () => {
  it("드래그 동작에 의한 애니메이션 처리", () => {
    const history = createMemoryHistory();
    history.push("/searchInput/3");
    const utils = render(
      <Provider store={store}>console.warn();

        <Router history={history}>
          <Step3Container />
        </Router>
      </Provider>
    );

    // const toggleButton = utils.getByText("리스트뷰 +");
    // fireEvent.click(toggleButton);
    // utils.findByText("리스트뷰 -")
    // .then((element) => {
    //   console.log("element.clientTop", element.clientTop);
    //   // expect(element.clientTop).toBe('리스트뷰')
    // });
  });

  it("다음으로 클릭 시 리덕스 업데이트 후 다음 페이지로 이동", () => {
    const history = createMemoryHistory();
    history.push("/searchInput/loading");
    const utils = render(
      <Provider store={store}>
        <Router history={history}>
          <SearchInputLoadingContainer />
        </Router>
      </Provider>
    );
  });
});
