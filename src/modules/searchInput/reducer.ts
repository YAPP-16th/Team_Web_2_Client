import { createReducer } from "typesafe-actions";
import { SearchInputState, SearchInputAction } from "./types";
import {
  SET_SEARCHINPUT,
  GO_NEXT_SEARCH_STEP,
  GO_PREV_SEARCH_STEP,
} from "./actions";

// 전체 상품 리스트의
const initialState: SearchInputState = {
  searchInputData: {
    address: "주소를 입력하세요",
    addressTag: "tag",
    maxTime: 0,
    minTime: 0,
    transferLimit: 100,
    transitMode: [],
    searchStep: 1,
  },
};

const searchInput = createReducer<SearchInputState, SearchInputAction>(
  initialState,
  {
    [SET_SEARCHINPUT]: (state, action) => {
      let processed = { ...state };
      processed.searchInputData = action.payload;
      return processed;
    },
    [GO_NEXT_SEARCH_STEP]: (state, action) => {
      let processed = { ...state };
      if (processed.searchInputData.searchStep < 3) {
        processed.searchInputData.searchStep += 1;
      }
      return processed;
    },
    [GO_PREV_SEARCH_STEP]: (state, action) => {
      let processed = { ...state };
      if (processed.searchInputData.searchStep > 0) {
        processed.searchInputData.searchStep -= 1;
      }
      return processed;
    },
  }
);

export default searchInput;
