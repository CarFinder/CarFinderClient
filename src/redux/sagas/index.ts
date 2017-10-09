import { fork, call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import signupSaga from './signupSaga';
import emailConfrimationSaga from './emailConfirmationSaga';

function* rootSaga() {
  yield [fork(signupSaga), fork(emailConfrimationSaga)];
}

export default rootSaga;
=======
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

function* rootSaga() {
    yield [
    
    ]
}

export default rootSaga;
