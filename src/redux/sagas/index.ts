import { fork } from 'redux-saga/effects';
import signinSaga from './signinSaga';
import signupSaga from './signupSaga';
import emailConfrimationSaga from './emailConfirmationSaga';

function* rootSaga() {
  yield [fork(signinSaga), fork(signupSaga), fork(emailConfrimationSaga)];
}

export default rootSaga;
