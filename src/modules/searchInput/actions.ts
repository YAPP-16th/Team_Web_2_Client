import { createAction } from "typesafe-actions";
import { SearchInputData } from "./types";

// 액션 타입
export const SET_SEARCHINPUT = "searchInput/SET_SEARCHINPUT";
export const GO_NEXT_SEARCH_STEP = "searchInput/GO_NEXT_SEARCH_STEP";
export const GO_PREV_SEARCH_STEP = "searchInput/GO_PREV_SEARCH_STEP";

// 액션 생성 함수
export const setSearchInput = createAction(SET_SEARCHINPUT)<SearchInputData>();

export const goNextSearchStep = createAction(GO_NEXT_SEARCH_STEP)();

export const goPrevSearchStep = createAction(GO_PREV_SEARCH_STEP)();
