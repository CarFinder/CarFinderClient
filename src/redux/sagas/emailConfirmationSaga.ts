import { SagaIterator } from 'redux-saga';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import api from '../../api/api';
import * as actionTypes from '../actions/actionTypes';

function* callConfrimEmail(action: any) {
  yield put({ type: actionTypes.SET_LOADING, payload: true });
  yield put({ type: actionTypes.SET_AUTH_ERROR, payload: '' });
  try {
    const response = yield call(api.user.confirmEmail, action.payload);
    yield put({ type: actionTypes.SET_LOADING, payload: false });
    yield put({ type: actionTypes.USER_CONFIRM_EMAIL_SUCCESS });
  } catch (e) {
    yield put({ type: actionTypes.SET_AUTH_ERROR, payload: e.response.data.error });
    yield put({ type: actionTypes.SET_LOADING, payload: false });
  }
}

export default function* watchConfirmEmail(): SagaIterator {
  yield takeEvery(actionTypes.USER_CONFIRM_EMAIL, callConfrimEmail);
}
