import { GET_ROOMS, GET_ROOMS_ERROR, GET_ROOMS_SUCCESS, getRoomsAsync } from './actions';
import { getRooms, Room } from '../../api/rooms';
import { call, put, takeLatest } from 'redux-saga/effects';

function* getRoomsSaga(action: ReturnType<typeof getRoomsAsync.request>) {
  try {
    const rooms: Array<Room> = yield call(getRooms, action.payload);
    yield put(getRoomsAsync.success(rooms));
  } catch (e) {
    yield put(getRoomsAsync.failure(e));
  }
}

export function* roomsSaga() {
  yield takeLatest(GET_ROOMS, getRoomsSaga);
}