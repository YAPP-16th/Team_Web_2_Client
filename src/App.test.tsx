import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

import { Provider } from 'react-redux'
import { createStore } from "redux";
import rootReducer from "./modules";


describe("<App />", () => {


const store = createStore(rootReducer);

  it("first test", () => {
    const utils = render(<Provider store={store}><App /></Provider>);
    utils.getByText("Click");
  });
});
