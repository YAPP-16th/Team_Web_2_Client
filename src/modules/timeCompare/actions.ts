import { createAction } from 'typesafe-actions';
import { TimeCompareItem } from '../../utils/TimeCompare/functions';

// 액션 타입
export const SET_USER_LOCATION = 'listView/SET_USER_LOCATION';
export const SET_USER_ADDRESS = 'listView/SET_USER_ADDRESS';
export const SET_COMPARE_ITEM_ADDRESS = 'listView/SET_COMPARE_ITEM_ADDRESS';
export const SET_COMPARE_LOCATION = 'listView/SET_COMPARE_LOCATION';
export const SET_SETTER_MODE = 'listView/SET_SETTER_MODE';
export const SET_SETTER_TARGET = 'listView/SET_SETTER_TARGET';
export const SET_COMPARE_ITEMS = 'listView/SET_COMPARE_ITEMS';

// 액션 생성 함수
export const setUserLocation = createAction(SET_USER_LOCATION)<{
  lat: number;
  lng: number;
}>();
export const setCompareLocation = createAction(SET_COMPARE_LOCATION)<{
  lat: number;
  lng: number;
}>();

export const setUserAddress = createAction(SET_USER_ADDRESS)<string>();

export const setCompareItemAddress = createAction(SET_COMPARE_ITEM_ADDRESS)<
  string
>();

export const setSetterMode = createAction(SET_SETTER_MODE)<boolean>();

export const setSetterTarget = createAction(SET_SETTER_TARGET)<
  'userAddress' | 'compareItemAddress'
>();

export const setCompareItemContents = createAction(SET_COMPARE_ITEMS)<
  TimeCompareItem[]
>();
