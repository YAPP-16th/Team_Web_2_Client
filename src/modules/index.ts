import { combineReducers } from 'redux';
import rooms from './rooms';
import { roomsSaga } from './rooms';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
  rooms
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

// 루트 사가 만들어서 내보내기
export function* rootSaga() {
  yield all([roomsSaga()]);
}
