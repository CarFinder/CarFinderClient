import { SagaIterator } from 'redux-saga';
import { call, put, takeEvery } from 'redux-saga/effects';
import api from '../../api/api';
import { transformDataForSignup } from '../../utils/utils';
import * as actionTypes from '../actions/actionTypes';
import { Action } from './index';

function* callSignup(action: Action) {
  yield put({ type: actionTypes.SET_LOADING, payload: true });
  yield put({ type: actionTypes.SET_AUTH_ERROR, payload: '' });
  try {
    const response = yield call(api.user.signup, transformDataForSignup(action.payload));
    yield put({ type: actionTypes.SET_LOADING, payload: false });
    yield put({ type: actionTypes.USER_SIGN_UP_SUCCESS });
  } catch (e) {
    yield put({
      type: actionTypes.SET_AUTH_ERROR,
      payload: e.response.data.error ? e.response.data.error : 'Server-side error'
    });
    yield put({ type: actionTypes.SET_LOADING, payload: false });
  }
}

export default function* watchSignup(): SagaIterator {
  yield takeEvery(actionTypes.USER_SIGN_UP, callSignup);
}
