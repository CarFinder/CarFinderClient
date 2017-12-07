import jwt_decode from 'jwt-decode';
import { delay, SagaIterator } from 'redux-saga';
import { call, put, takeEvery } from 'redux-saga/effects';
import api from '../../api/api';
import setAuthorizationHeader from '../../utils/axiosHeader';
import { toFormData } from '../../utils/utils';
import { Action } from './index';

function* callChangeUserData(action: Action) {
  yield put({ type: 'SET_LOADING', payload: true });
  try {
    const response = yield call(api.user.changeUserData, action.payload);
    const decodedData = jwt_decode(response.data.token);
    localStorage.setItem('jwt', response.data.token);
    setAuthorizationHeader(response.data.token);
    yield put({ type: 'SET_LOADING', payload: false });
    yield put({
      type: 'SET_SUCCESS_MESSAGE',
      payload: 'We have successfully saved your data.'
    });
    yield put({ type: 'CHANGE_USER_DATA_SUCCESS', payload: decodedData });
    yield call(delay, 1500);
    yield put({
      type: 'SET_SUCCESS_MESSAGE',
      payload: ''
    });
  } catch (e) {
    yield put({ type: 'SET_LOADING', payload: false });
    yield put({
      type: 'SET_CHANGE_USER_DATA_ERROR',
      payload: e.response.data.error ? e.response.data.error : 'Server-side error'
    });
  }
}

function* callChangeUserAvatar(action: Action) {
  yield put({ type: 'SET_LOADING', payload: true });
  try {
    const encodedImage = yield call(toFormData, action.payload);
    const response = yield call(api.user.changeUserAvatar, encodedImage);
    const decodedData = jwt_decode(response.data.token);
    localStorage.setItem('jwt', response.data.token);
    setAuthorizationHeader(response.data.token);
    yield put({ type: 'SET_LOADING', payload: false });
    yield put({
      type: 'SET_SUCCESS_MESSAGE',
      payload: 'We have successfully saved your photo.'
    });
    yield put({ type: 'CHANGE_USER_DATA_SUCCESS', payload: decodedData });
    yield call(delay, 1500);
    yield put({
      type: 'SET_SUCCESS_MESSAGE',
      payload: ''
    });
  } catch (e) {
    yield put({ type: 'SET_LOADING', payload: false });
    yield put({
      type: 'SET_CHANGE_USER_DATA_ERROR',
      payload: e.response.data.error ? e.response.data.error : 'Server-side error'
    });
  }
}

function* callChangeUserSettings(action: Action) {
  yield put({ type: 'SET_LOADING', payload: true });
  try {
    const response = yield call(api.user.changeUserSettings, action.payload);
    const decodedData = jwt_decode(response.data.token);
    localStorage.setItem('jwt', response.data.token);
    setAuthorizationHeader(response.data.token);
    yield put({ type: 'SET_LOADING', payload: false });
    yield put({
      type: 'SET_SUCCESS_MESSAGE',
      payload: 'We have successfully saved your settings.'
    });
    yield put({ type: 'CHANGE_USER_DATA_SUCCESS', payload: decodedData });
    yield call(delay, 1500);
    yield put({
      type: 'SET_SUCCESS_MESSAGE',
      payload: ''
    });
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
  yield takeEvery('CHANGE_USER_AVATAR', callChangeUserAvatar);
  yield takeEvery('CHANGE_USER_SETTINGS', callChangeUserSettings);
}
