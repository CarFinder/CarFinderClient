import { fork } from 'redux-saga/effects';
import carFiltersSaga from './carFiltersSaga';
import changePasswordSaga from './changePasswordSaga';
import changeUserDataSaga from './changeUserData';
import emailConfrimationSaga from './emailConfirmationSaga';
import liquidAdsSaga from './liquidAdsSaga';
import savedSearchResultsSaga from './savedSearchResults';
import savedSearchSaga from './savedSearchSaga';
import signinSaga from './signinSaga';
import signupSaga from './signupSaga';

function* rootSaga() {
  yield [
    fork(signinSaga),
    fork(signupSaga),
    fork(emailConfrimationSaga),
    fork(changePasswordSaga),
    fork(carFiltersSaga),
    fork(changeUserDataSaga),
    fork(savedSearchSaga),
    fork(savedSearchResultsSaga),
    fork(liquidAdsSaga)
  ];
}

export default rootSaga;

export interface Action {
  type: string;
  payload?: any;
}
