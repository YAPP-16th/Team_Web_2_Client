import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../../modules";

import ZoneSearchResultHeaderContainer from "./ZoneSearchResultHeaderContainer";

const store = createStore(rootReducer);

describe("<ZoneDetailHeaderContainer />", () => {
  it("홈으로 이동하기(랜딩 페이지)", () => {
    const history = createMemoryHistory();
    history.push("/search?key=value");
    const utils = render(
      <Provider store={store}>
        <Router history={history}>
          <ZoneSearchResultHeaderContainer />
        </Router>
      </Provider>
    );

    const goHomeLogo = utils.getByTestId("go-home");
    fireEvent.click(goHomeLogo);
    expect(history.location.pathname).toBe("/");
  });
  // it("메인메뉴 모달창 show/hide", () => {
  //   const utils = render(<DefaultHeaderContainer />);
  // });
  // it("검색 페이지로 이동", () => {
  //   const utils = render(<DefaultHeaderContainer />);
  // });
});
