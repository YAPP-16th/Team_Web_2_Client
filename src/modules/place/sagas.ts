import { GET_PLACES, getPlacesAsync } from './actions';
import { getPlaces, Place } from '../../api/places';
import { call, put, takeLatest } from 'redux-saga/effects';

function* getPlacesSaga(action: ReturnType<typeof getPlacesAsync.request>) {
  try {
    const places: Array<Place> = yield call(getPlaces, action.payload);
    yield put(getPlacesAsync.success(places));
  } catch (e) {
    yield put(getPlacesAsync.failure(e));
  }
}

export function* placesSaga() {
  yield takeLatest(GET_PLACES, getPlacesSaga);
}