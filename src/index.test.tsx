import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./modules";
import { BrowserRouter } from "react-router-dom";

const store = createStore(rootReducer);

describe("<App />", () => {
  it("Initial Render Test", () => {
    const utils = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
  });
});
