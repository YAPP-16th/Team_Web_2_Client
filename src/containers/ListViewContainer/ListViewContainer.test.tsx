import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import ListViewContainer from "./ListViewContainer";
import App from '../../App';
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../../modules";
import { Router } from "react-router-dom";

import { createMemoryHistory } from "history";

const store = createStore(rootReducer);

describe("<ListViewContainer />", () => {
  it("드래그 버튼 렌더링 여부", async () => {
    const history = createMemoryHistory();
    history.push("/search?key=value");
    const utils = render(
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    );

    const toggleButton = utils.getByText("리스트뷰 +");
    // fireEvent.click(toggleButton);
    // await waitForElement(() => utils.getByText("리스트뷰 -"));
  });

  it("ZONE 아이템들 렌더링 여부", async () => {
    const history = createMemoryHistory();
    history.push("/search?key=value");
    const utils = render(
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    );

    const target = utils.getAllByTestId('searchResult-item');
  });

});
