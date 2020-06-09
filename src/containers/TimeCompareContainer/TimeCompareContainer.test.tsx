import React from "react";
import { render, waitForElement } from "@testing-library/react";
import TimeCompareContainer from './TimeCompareContainer';
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../../modules";
import { Router } from "react-router-dom";

import { getRooms } from '../../api/rooms';

import { createMemoryHistory } from "history";

const store = createStore(rootReducer);

describe("<TimeCompareContainer />", () => {
  it("렌더링 여부", () => {
    const history = createMemoryHistory();
    history.push("/search?startLat=37.5725&startLng=126.820454&zoneId=3771#/zone/2/realestate")

    const utils = render(
      <Provider store={store}>
      <Router history={history}>
        <TimeCompareContainer currentZoneId={3771} />
      </Router>
    </Provider>);
  });
});