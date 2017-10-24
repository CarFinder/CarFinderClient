import { fork } from 'redux-saga/effects';
import carFiltersSaga from './carFiltersSaga';
import changePasswordSaga from './changePasswordSaga';
import changeUserDataSaga from './changeUserData';
import emailConfrimationSaga from './emailConfirmationSaga';
import signinSaga from './signinSaga';
import signupSaga from './signupSaga';

function* rootSaga() {
  yield [
    fork(signinSaga),
    fork(signupSaga),
    fork(emailConfrimationSaga),
    fork(changePasswordSaga),
    fork(carFiltersSaga),
    fork(changeUserDataSaga)
  ];
}

export default rootSaga;
