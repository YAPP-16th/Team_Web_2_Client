import { createReducer } from "typesafe-actions";
import { RoomsState, RoomsAction } from "./types";
import { GET_ROOMS, GET_ROOMS_SUCCESS, GET_ROOMS_ERROR } from "./actions";

const initialState: RoomsState = {
  loading: false,
  error: null,
  data: []
};

const room = createReducer<RoomsState, RoomsAction>(initialState, {
  [GET_ROOMS]: (state)  => {
    return {
      ...state,
      error: null,
      loading: true,
    }
  },
  [GET_ROOMS_SUCCESS]: (state, action) => {
    const processed = { ...state };
    processed.data = action.payload;
    return {
      ...processed,
      error: null,
      loading: false,
    }
  },
  [GET_ROOMS_ERROR]: (state, action) => {
    return {
      ...state,
      error: action.payload,
      loading: true,
    }
  },
})

export default room;