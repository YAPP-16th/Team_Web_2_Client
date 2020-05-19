import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

// Reducers
import rooms from './rooms';
import listView from './listView';
import searchInput from './searchInput';

// Sagas
import { roomsSaga } from './rooms';

// 루트 라우터
const rootReducer = combineReducers({
  rooms,
  listView,
  searchInput,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

// 루트 사가 만들어서 내보내기
export function* rootSaga() {
  yield all([roomsSaga()]);
}
