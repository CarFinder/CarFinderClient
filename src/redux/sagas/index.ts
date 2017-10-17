import { fork } from 'redux-saga/effects';
import emailConfrimationSaga from './emailConfirmationSaga';
import changePasswordSaga from './changePasswordSaga';
import signinSaga from './signinSaga';
import signupSaga from './signupSaga';

function* rootSaga() {
  yield [fork(signinSaga), fork(signupSaga), fork(emailConfrimationSaga), fork(changePasswordSaga)];
}

export default rootSaga;
