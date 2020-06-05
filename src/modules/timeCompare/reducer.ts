import { createReducer } from "typesafe-actions";
import { TimeCompareState, TimeCompareAction } from "./types";
import { SET_USER_LOCATION, SET_COMPARE_LOCATION } from "./actions";

const initialState: TimeCompareState = {
  compareLocation: {
    lat: 0,
    lng: 0,
  },
  userLocation: {
    lat: 0,
    lng: 0,
  }
};

const listView = createReducer<TimeCompareState, TimeCompareAction>(initialState, {
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
})

export default listView;