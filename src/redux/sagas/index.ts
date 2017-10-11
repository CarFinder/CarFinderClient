import { fork } from 'redux-saga/effects';
import emailConfrimationSaga from './emailConfirmationSaga';
import signinSaga from './signinSaga';
import signupSaga from './signupSaga';

function* rootSaga() {
  yield [fork(signinSaga), fork(signupSaga), fork(emailConfrimationSaga)];
}

export default rootSaga;
