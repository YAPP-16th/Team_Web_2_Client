import { createReducer } from "typesafe-actions";
import { RoomsState, RoomsAction } from "./types";
import {
  GET_ROOMS,
  GET_ROOMS_SUCCESS,
  GET_ROOMS_ERROR
} from "./actions";

// 전체 상품 리스트의
const initialState: RoomsState = {
  rooms: {
    loading: false,
    error: null,
    data: []
  },
  selectedRoom: {
    name: "s",
    description: "",
    livingType: "월세",
    buildingType: "빌라",
    deposit: 0,
    monthlyPayment: 0,
    coordinate: { latitude: 0, longitude:0 }
  }
};

const rooms = createReducer<RoomsState, RoomsAction>(initialState, {
  [GET_ROOMS]: state => ({
    ...state,
    rooms: {
      ...state.rooms,
      loading: true
    }
  }),
  [GET_ROOMS_SUCCESS]: (state, action) => ({
    ...state,
    rooms: {
      ...state.rooms,
      loading: false,
      data: action.payload
    }
  }),
  [GET_ROOMS_ERROR]: (state, action) => ({
    ...state,
    rooms: {
      ...state.rooms,
      loading: false,
      error: action.payload
    }
  }),
});

export default rooms;