import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import LandingPage from "./LandingPage";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../../modules";
import { Router } from "react-router-dom";

import { createMemoryHistory } from "history";

const store = createStore(rootReducer);

describe("<ListViewContainer />", () => {
  it("드래그 동작에 의한 애니메이션 처리", async () => {
    const history = createMemoryHistory();
    const utils = render(
      <Provider store={store}>
        <Router history={history}>
        <LandingPage />
        </Router>
      </Provider>
    );
    const scrollTextBefore = utils.getAllByTestId('emphasized-text-wrapper');    
    scrollTextBefore.forEach(text => {
      expect(text.innerHTML).toMatch('통근 시간');
      expect(text.innerHTML).toMatch('통학 시간');
    })
  });
});
