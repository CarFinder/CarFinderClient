import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import * as actionTypes from '../actions/actionTypes';
import api from '../../api/api';

function* callConfrimEmail(action: any) {
  yield put({ type: actionTypes.SET_LOADING, payload: true });
  yield put({ type: actionTypes.SET_AUTH_ERROR, payload: '' });
  try {
    // TODO: Handle error from server
    const response = yield call(api.user.confirmEmail, action.payload);
    yield put({ type: actionTypes.SET_LOADING, payload: false });
    yield put({ type: actionTypes.USER_CONFIRM_EMAIL_SUCCESS });
    yield call(action.resolve);
  } catch {
    yield put({ type: actionTypes.SET_AUTH_ERROR, payload: 'Can not reach the server' });
    yield put({ type: actionTypes.SET_LOADING, payload: false });
  }
}

export default function* watchConfirmEmail(): SagaIterator {
  yield takeEvery(actionTypes.USER_CONFIRM_EMAIL, callConfrimEmail);
}
