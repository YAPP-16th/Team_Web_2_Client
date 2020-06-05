import { createReducer } from "typesafe-actions";
import { PlacesState, PlacesAction } from "./types";
import { GET_PLACES, GET_PLACES_SUCCESS, GET_PLACES_ERROR } from "./actions";

const initialState: PlacesState = {
  loading: false,
  error: null,
  data: []
};

const place = createReducer<PlacesState, PlacesAction>(initialState, {
  [GET_PLACES]: (state)  => {
    return {
      ...state,
      error: null,
      loading: true,
    }
  },
  [GET_PLACES_SUCCESS]: (state, action) => {
    const processed = { ...state };
    if (action.payload) {
      processed.data = action.payload ? action.payload : [];
    }
    return {
      ...processed,
      error: null,
      loading: false,
    }
  },
  [GET_PLACES_ERROR]: (state, action) => {
    return {
      ...state,
      error: action.payload,
      loading: true,
    }
  },
})

export default place;