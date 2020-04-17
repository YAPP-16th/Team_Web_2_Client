import { createReducer } from "typesafe-actions";
import { ListViewState } from "./types";
import { TOGGLE_LISTVIEW } from "./actions";

const initialState: ListViewState = {
  toggled: false
};

const listView = createReducer<ListViewState>(initialState, {
  [TOGGLE_LISTVIEW]: state => {
    const processed = { ...state };
    processed.toggled = !processed.toggled
    return processed;
  }
})

export default listView;