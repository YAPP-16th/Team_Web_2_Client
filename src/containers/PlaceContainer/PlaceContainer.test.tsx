import React from "react";
import { render, waitForElement } from "@testing-library/react";
import PlaceContainer from "./PlaceContainer";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../../modules";
import { Router } from "react-router-dom";

import { getRooms } from '../../api/rooms';

import { createMemoryHistory } from "history";

const store = createStore(rootReducer);