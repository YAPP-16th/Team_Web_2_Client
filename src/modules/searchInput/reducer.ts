import { createReducer } from "typesafe-actions";
import { SearchInputState, SearchInputAction } from "./types";
import {
  SET_SEARCHINPUT,
} from "./actions";

// 전체 상품 리스트의
const initialState: SearchInputState = {
  searchInputData: {
    address: '주소를 입력하세요',
    addressTag: 'tag',
    maxTime: 0,
    minTime: 0,
    transferLimit: 100,
    transitMode: [],
  }
};

const searchInput = createReducer<SearchInputState, SearchInputAction>(initialState, {
  [SET_SEARCHINPUT]: (state, action) => {
    let processed = { ...state };
    processed.searchInputData = action.payload;
    return processed;
  }
})


export default searchInput;