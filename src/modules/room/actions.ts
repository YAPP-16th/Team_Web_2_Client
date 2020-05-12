import { createAsyncAction } from "typesafe-actions";
import { Room } from "../../api/rooms"
import { AxiosError } from 'axios';

// 액션 타입
export const GET_ROOMS = "rooms/GET_ROOMS";
export const GET_ROOMS_SUCCESS = "rooms/GET_ROOMS_SUCCESS";
export const GET_ROOMS_ERROR = "rooms/GET_ROOMS_ERROR";


// 액션 생성 함수
export const getRoomsAsync = createAsyncAction(
  GET_ROOMS,
  GET_ROOMS_SUCCESS,
  GET_ROOMS_ERROR
)<number, Array<Room>, AxiosError>();



