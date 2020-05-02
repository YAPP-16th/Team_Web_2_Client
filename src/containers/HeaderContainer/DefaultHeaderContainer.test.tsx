import React from "react";
import { render, fireEvent } from "@testing-library/react";
import DefaultHeaderContainer from "./DefaultHeaderContainer";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

describe("<DefaultHeaderContainer />", () => {
  it("홈으로 이동하기(랜딩 페이지)", () => {
    const history = createMemoryHistory();
    history.push("/search");
    const utils = render(
      <Router history={history}>
        <DefaultHeaderContainer />
      </Router>
    );

    const goHomeLogo = utils.getByTestId('go-home');
    fireEvent.click(goHomeLogo);
    expect(history.location.pathname).toBe('/');
  });
  // it("검색 페이지로 이동", () => {
  //   const utils = render(<DefaultHeaderContainer />);
  // });
  // it("메인메뉴 모달창 show/hide", () => {
  //   const utils = render(<DefaultHeaderContainer />);
  // });
});
