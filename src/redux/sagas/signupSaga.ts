import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import * as actionTypes from '../actions/actionTypes';
import api from '../../api/api';

function* callSignup(action: any) {
  yield put({ type: actionTypes.SET_LOADING, payload: true });
  yield put({ type: actionTypes.SET_AUTH_ERROR, payload: '' });
  try {
    const response = yield call(api.user.signup, action.payload);
    if (response.data.error.type) {
      yield put({ type: actionTypes.SET_LOADING, payload: false });
      yield put({
        type: actionTypes.SET_AUTH_ERROR,
        payload: response.data.error
      });
    } else {
      yield put({ type: actionTypes.SET_LOADING, payload: false });
      yield put({ type: actionTypes.USER_SIGN_UP_SUCCESS });
    }
    yield call(action.resolve);
  } catch {
    yield put({ type: actionTypes.SET_AUTH_ERROR, payload: 'Can not reach the server' });
    yield put({ type: actionTypes.SET_LOADING, payload: false });
  }
}

export default function* watchSignup(): SagaIterator {
  yield takeEvery(actionTypes.USER_SIGN_UP, callSignup);
}
