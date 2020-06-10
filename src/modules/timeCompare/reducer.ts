import { createReducer } from "typesafe-actions";
import { TimeCompareState, TimeCompareAction } from "./types";
import {
  SET_USER_LOCATION,
  SET_COMPARE_LOCATION,
  SET_USER_ADDRESS,
  SET_COMPARE_ITEM_ADDRESS,
  SET_SETTER_MODE,
  SET_SETTER_TARGET,
  SET_COMPARE_ITEMS
} from "./actions";

const initialState: TimeCompareState = {
  compareLocation: {
    lat: 0,
    lng: 0,
  },
  userLocation: {
    lat: 0,
    lng: 0,
  },
  compareItemContents: [],
  userAddress: "주소를 설정해주세요",
  compareItemAddress: "",
  setterMode: false,
  setterTarget: "userAddress",
};

const listView = createReducer<TimeCompareState, TimeCompareAction>(
  initialState,
  {
    [SET_USER_LOCATION]: (state, action) => {
      const processed = { ...state };
      processed.userLocation = action.payload;
      return processed;
    },
    [SET_COMPARE_LOCATION]: (state, action) => {
      const processed = { ...state };
      processed.compareLocation = action.payload;
      return processed;
    },
    [SET_COMPARE_ITEM_ADDRESS]: (state, action) => {
      const processed = { ...state };
      processed.compareItemAddress = action.payload;
      return processed;
    },
    [SET_USER_ADDRESS]: (state, action) => {
      const processed = { ...state };
      processed.userAddress = action.payload;
      return processed;
    },
    [SET_SETTER_MODE]: (state, action) => {
      const processed = { ...state };
      processed.setterMode = action.payload;
      return processed;
    },
    [SET_SETTER_TARGET]: (state, action) => {
      const processed = { ...state };
      processed.setterTarget = action.payload;
      return processed;
    },
    [SET_COMPARE_ITEMS]: (state, action) => {
      const processed = { ...state };
      processed.compareItemContents = action.payload;
      return processed;
    }
  }
);

export default listView;
