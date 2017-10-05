import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import * as actionTypes from '../actions/actionTypes';
import api from '../../api/api';

function* callSignup(action: any) {
  try {
    yield call(api.user.signup, action.payload);
    yield call(action.resolve);
  } catch {
    // TODO: handle error here
  }
}

export default function* watchSignup(): SagaIterator {
  yield takeEvery(actionTypes.USER_SIGN_UP, callSignup);
}
