import { GET_TRANSITS, getTransitsAsync } from './actions';
import { getTransits, Transit } from '../../api/transits';
import { call, put, takeLatest } from 'redux-saga/effects';

function* getTransitsSaga(action: ReturnType<typeof getTransitsAsync.request>) {
  try {
    console.log('what?')
    const transits: Array<Transit> = yield call(getTransits, action.payload);
    yield put(getTransitsAsync.success(transits));
  } catch (e) {
    yield put(getTransitsAsync.failure(e));
  }
}

export function* transitsSaga() {
  yield takeLatest(GET_TRANSITS, getTransitsSaga);
}