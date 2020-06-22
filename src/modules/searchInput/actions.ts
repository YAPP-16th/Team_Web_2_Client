import { createAction } from "typesafe-actions";
import { SearchInputData } from './types';

// 액션 타입
export const SET_SEARCHINPUT = "searchInput/SET_SEARCHINPUT";

// 액션 생성 함수
export const setSearchInput = createAction(
  SET_SEARCHINPUT
)<SearchInputData>();
