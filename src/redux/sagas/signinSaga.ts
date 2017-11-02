import jwt_decode from 'jwt-decode';
import { SagaIterator } from 'redux-saga';
import { call, put, takeEvery } from 'redux-saga/effects';
import api from '../../api/api';
import setAuthorizationHeader from '../../utils/axiosHeader';
import { Action } from './index';

function* callSignin(action: Action) {
  yield put({ type: 'SET_LOADING', payload: true });
  try {
    const response = yield call(api.user.getUser, action.payload);
    const decodedData = jwt_decode(response.data.token);
    localStorage.setItem('jwt', response.data.token);
    setAuthorizationHeader(response.data.token);
    yield put({ type: 'SET_LOADING', payload: false });
    yield put({ type: 'USER_SIGN_IN_SUCCESS', payload: decodedData });
  } catch (e) {
    yield put({ type: 'SET_LOADING', payload: false });
    yield put({
      type: 'SET_AUTH_ERROR',
      payload: e.response.data.error ? e.response.data.error : 'Server-side error'
    });
  }
}

export default function* watchLogIn(): SagaIterator {
  yield takeEvery('USER_SIGN_IN', callSignin);
}
