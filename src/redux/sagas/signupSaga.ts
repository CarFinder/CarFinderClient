import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import * as actionTypes from '../actions/actionTypes';
import { transformDataForSignup } from '../../utils/utils';
import api from '../../api/api';

function* callSignup(action: any) {
  yield put({ type: actionTypes.SET_LOADING, payload: true });
  yield put({ type: actionTypes.SET_AUTH_ERROR, payload: '' });
  try {
    const response = yield call(api.user.signup, transformDataForSignup(action.payload));
    yield put({ type: actionTypes.SET_LOADING, payload: false });
    yield put({ type: actionTypes.USER_SIGN_UP_SUCCESS });
  } catch (e) {
    yield put({ type: actionTypes.SET_AUTH_ERROR, payload: e.response.data.error });
    yield put({ type: actionTypes.SET_LOADING, payload: false });
  }
}

export default function* watchSignup(): SagaIterator {
  yield takeEvery(actionTypes.USER_SIGN_UP, callSignup);
}
