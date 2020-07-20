import { createAsyncAction } from "typesafe-actions";
import { Transit, TransitQuery } from "../../api/transits"
import { AxiosError } from 'axios';

// 액션 타입
export const GET_TRANSITS = "TRANSITS/GET_TRANSITS";
export const GET_TRANSITS_SUCCESS = "TRANSITS/GET_TRANSITS_SUCCESS";
export const GET_TRANSITS_ERROR = "TRANSITS/GET_TRANSITS_ERROR";


// 액션 생성 함수
export const getTransitsAsync = createAsyncAction(
  GET_TRANSITS,
  GET_TRANSITS_SUCCESS,
  GET_TRANSITS_ERROR
)<TransitQuery, Array<Transit>, AxiosError>();



