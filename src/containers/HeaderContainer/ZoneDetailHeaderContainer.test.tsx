import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ZoneDetailHeaderContainer from "./ZoneDetailHeaderContainer";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../../modules";

const store = createStore(rootReducer);

describe("<ZoneDetailHeaderContainer />", () => {
  it("뒤로 이동하기", () => {
    const history = createMemoryHistory();
    history.push("/search?key=value#/zone/1/timecompare");
    const utils = render(
      <Provider store={store}>
        <Router history={history}>
          <ZoneDetailHeaderContainer />
        </Router>
      </Provider>
    );
    
    const goBackButton = utils.getByTestId('go-back')
    fireEvent.click(goBackButton);

  });

  it("탭 이동", async () => {
    const history = createMemoryHistory();
    history.push("/search?key=value#/zone/1/timecompare");
    const utils = render(
      <Provider store={store}>
        <Router history={history}>
          <ZoneDetailHeaderContainer />
        </Router>
      </Provider>
    );

    const goTimecompareButton = utils.getByTestId('timecompare');
    const goTransportation = utils.getByTestId('transportation');
    const goRealEsatate = utils.getByTestId('realestate');

    expect(goTimecompareButton).toHaveAttribute('href', '#/zone/1/timecompare');
    expect(goTransportation).toHaveAttribute('href', '#/zone/1/transportation');
    expect(goRealEsatate).toHaveAttribute('href', '#/zone/1/realestate');

  });


  // it("검색 페이지로 이동", () => {
  //   const utils = render(<ZoneDetailHeaderContainer />);
  // });
});
