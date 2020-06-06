import { createAction } from "typesafe-actions";

// 액션 타입
export const SET_USER_LOCATION = "listView/SET_USER_LOCATION";
export const SET_USER_ADDRESS = "listView/SET_USER_ADDRESS";
export const SET_COMPARE_LOCATION = "listView/SET_COMPARE_LOCATION";


// 액션 생성 함수
export const setUserLocation = createAction(
  SET_USER_LOCATION
)<{lat: number, lng: number}>();
export const setUserAddress = createAction(
  SET_USER_ADDRESS
)<string>();
export const setCompareLocation = createAction(
  SET_COMPARE_LOCATION
)<{lat: number, lng: number}>();



