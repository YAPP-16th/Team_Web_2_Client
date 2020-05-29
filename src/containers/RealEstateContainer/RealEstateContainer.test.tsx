import React from "react";
import { render, waitForElement } from "@testing-library/react";
import RealEstateContainer from "./RealEstateContainer";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../../modules";
import { Router } from "react-router-dom";

import { getRooms } from '../../api/rooms';

import { createMemoryHistory } from "history";

const store = createStore(rootReducer);

describe("<RealEstateContainer />", () => {
  it("렌더링 성공 여부 검사", async () => {
    const history = createMemoryHistory();
    history.push("/search?startLat=37.5725&startLng=126.820454&zoneId=3771#/zone/2/realestate")
    const utils = render(
      <Provider store={store}>
        <Router history={history}>
          <RealEstateContainer zoneId={3771} />
        </Router>
      </Provider>
    );

    utils.getByText("등록순");

  });
  // it("매물 데이터 API 성공 여부 검사", async () => {
  //   const results = await getRooms(3771);

  //   expect(results.length).toBeGreaterThan(0);
  // })
});
