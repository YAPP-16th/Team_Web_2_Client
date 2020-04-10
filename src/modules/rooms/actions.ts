import { createAsyncAction } from "typesafe-actions";
import { Room, Zone } from "../../api/rooms";
import { AxiosError } from "axios";

// 액션 타입
export const GET_ROOMS = "products/GET_ROOMS";
export const GET_ROOMS_SUCCESS = "products/GET_ROOMS_SUCCESS";
export const GET_ROOMS_ERROR = "products/GET_ROOMS_ERROR";

// 액션 생성 함수
export const getRoomsAsync = createAsyncAction(
  GET_ROOMS,
  GET_ROOMS_SUCCESS,
  GET_ROOMS_ERROR
)<Zone, Room[], AxiosError>();
