import { fork } from 'redux-saga/effects';
import signinSaga from './signinSaga'

function* rootSaga() {
    yield [fork(signinSaga)]
}

export default rootSaga;
