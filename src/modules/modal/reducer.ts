import { createReducer } from "typesafe-actions";
import { ModalState } from "./types";
import * as Actions from "./actions";

const initialState: ModalState = {
  container: undefined,
  bShow: false,
};

const modal = createReducer<ModalState>(initialState, {
  [Actions.SHOW_MODAL]: (state) => ({
    ...state,
    bShow: true,
  }),
  [Actions.HIDE_MODAL]: (state) => ({
    ...state,
    bShow: false,
  }),
  [Actions.CHANGE_CONTAINER_MODAL]: (state, action) => ({
    ...state,
    container: action.payload,
  }),
});

export default modal;
