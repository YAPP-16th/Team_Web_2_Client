import {
  getRoomsAsync,
  GET_ROOMS
} from "./actions";

import { Room, getRooms } from "../../api/rooms";

import { call, put, takeLatest } from "redux-saga/effects";

function* getRoomsSaga(action: ReturnType<typeof getRoomsAsync.request>) {
  try {
    const rooms: Room[] = yield call(getRooms, action.payload);
    yield put(getRoomsAsync.success(rooms));
  } catch (e) {
    yield put(getRoomsAsync.failure(e));
  }
}

export function* roomsSaga() {
  yield takeLatest(GET_ROOMS, getRoomsSaga);
}
