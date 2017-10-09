import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import * as actionTypes from '../actions/actionTypes';
import api from '../../api/api';

function* callSignup(action: any) {
  yield put({ type: actionTypes.SET_LOADING, payload: true });
  yield put({ type: actionTypes.SET_AUTH_ERROR, payload: '' });
  try {
    // TODO: Handle error from server
    const response = yield call(api.user.signup, action.payload);
    yield put({ type: actionTypes.SET_LOADING, payload: false });
    yield put({ type: actionTypes.USER_SIGN_UP_SUCCESS });
    yield call(action.resolve);
  } catch (e) {
    console.log(e);
    yield put({ type: actionTypes.SET_LOADING, payload: false });
  }
}

export default function* watchSignup(): SagaIterator {
  yield takeEvery(actionTypes.USER_SIGN_UP, callSignup);
}
