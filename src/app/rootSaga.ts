import testSaga from "sagas/test.saga";
import { all } from 'redux-saga/effects';
export default function* rootSaga() {
  console.log('rootSaga');
  yield all([
    testSaga()
  ]);
}