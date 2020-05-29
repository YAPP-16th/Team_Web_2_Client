import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

// Reducers
import listView from './listView'
import room, { roomsSaga } from './room';
import transit, { transitsSaga } from './transit';
import place, { placesSaga } from './place';
import modal from './modal'
import searchInput from './searchInput';


// 루트 라우터
const rootReducer = combineReducers({
  room,
  listView,
  modal,
  place,
  transit,
  searchInput,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

// 루트 사가 만들어서 내보내기
export function* rootSaga() {
  yield all([roomsSaga(), transitsSaga(), placesSaga()]);
}
