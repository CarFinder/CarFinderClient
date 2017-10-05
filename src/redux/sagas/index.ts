import { fork, call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import signupSaga from './signupSaga';

function* rootSaga() {
  yield [fork(signupSaga)];
}

export default rootSaga;
