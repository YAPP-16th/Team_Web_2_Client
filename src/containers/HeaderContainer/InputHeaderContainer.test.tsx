import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { renderHook, act } from "@testing-library/react-hooks";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../../modules";

import InputHeaderContainer from "./InputHeaderContainer";
import DefaultHeaderContainer from "./DefaultHeaderContainer";
import modalHooks from "../../components/Modal/ModalHooks";

describe("<InputHeaderContainer />", () => {
  const store = createStore(rootReducer);

  // it("홈으로 이동하기(랜딩 페이지)", () => {
  //   const history = createMemoryHistory();
  //   history.push("/");
  //   const utils = render(
  //     <Provider store={store}>
  //       <Router history={history}>
  //         <DefaultHeaderContainer />
  //       </Router>
  //     </Provider>
  //   );
  // });
});