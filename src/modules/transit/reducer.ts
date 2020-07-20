import { createReducer } from "typesafe-actions";
import { TransitsState, TransitsAction } from "./types";
import { GET_TRANSITS, GET_TRANSITS_SUCCESS, GET_TRANSITS_ERROR } from "./actions";

const initialState: TransitsState = {
  loading: false,
  error: null,
  data: []
};

const transit = createReducer<TransitsState, TransitsAction>(initialState, {
  [GET_TRANSITS]: (state)  => {
    return {
      ...state,
      error: null,
      loading: true,
    }
  },
  [GET_TRANSITS_SUCCESS]: (state, action) => {
    const processed = { ...state };
    processed.data = action.payload ? action.payload : [];
    return {
      ...processed,
      error: null,
      loading: false,
    }
  },
  [GET_TRANSITS_ERROR]: (state, action) => {
    return {
      ...state,
      error: action.payload
    }
  },
})

export default transit;