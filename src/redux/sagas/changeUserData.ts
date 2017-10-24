import jwt_decode from 'jwt-decode';
import { SagaIterator } from 'redux-saga';
import { call, put, takeEvery } from 'redux-saga/effects';
import API from '../../api/api';
import setAuthorizationHeader from '../../utils/axiosHeader';

function* callChangeUserData(action: any) {
  yield put({ type: 'SET_LOADING', payload: true });
  try {
    const response = yield call(API.user.changeUserData, action.payload);
    const decodedData = jwt_decode(response.data.token);
    localStorage.setItem('jwt', response.data.token);
    setAuthorizationHeader(response.data.token);
    yield put({ type: 'SET_LOADING', payload: false });
  } catch (e) {
    yield put({ type: 'SET_LOADING', payload: false });
    yield put({
      type: 'SET_CHANGE_USER_DATA_ERROR',
      payload: e.response.data.error ? e.response.data.error : 'Server-side error'
    });
  }
}

export default function* watchChangeUserData(): SagaIterator {
  yield takeEvery('CHANGE_USER_DATA', callChangeUserData);
}
