import { fork } from 'redux-saga/effects';
import carFiltersSaga from './carFiltersSaga';
import changePasswordSaga from './changePasswordSaga';
import changeUserDataSaga from './changeUserData';
import emailConfrimationSaga from './emailConfirmationSaga';
import liquidAdsSaga from './liquidAdsSaga';
import landingPageSaga from './landingPageSaga';
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
    fork(liquidAdsSaga),
    fork(landingPageSaga)
  ];
}

export default rootSaga;

export interface Action {
  type: string;
  payload?: any;
}
