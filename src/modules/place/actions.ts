import { createAsyncAction } from "typesafe-actions";
import { Place } from "../../api/places"
import { AxiosError } from 'axios';

// 액션 타입
export const GET_PLACES = "places/GET_PLACES";
export const GET_PLACES_SUCCESS = "places/GET_PLACES_SUCCESS";
export const GET_PLACES_ERROR = "places/GET_PLACES_ERROR";


// 액션 생성 함수
export const getPlacesAsync = createAsyncAction(
  GET_PLACES,
  GET_PLACES_SUCCESS,
  GET_PLACES_ERROR
)<number, Array<Place>, AxiosError>();



