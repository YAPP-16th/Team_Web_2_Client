import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("<App />", () => {
  it("first test", () => {
    const utils = render(<App />);
    utils.getByText("리스트뷰 +");
  });
});
