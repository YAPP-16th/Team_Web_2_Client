import { createAction } from "typesafe-actions";

// 액션 타입
export const TOGGLE_LISTVIEW = "listView/TOGGLE_LISTVIEW";

// 액션 생성 함수
export const toggleListView = createAction(
  TOGGLE_LISTVIEW
)();
