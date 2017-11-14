import { SagaIterator } from 'redux-saga';
import { call, put, takeEvery } from 'redux-saga/effects';
import api from '../../api/api';
import { Action } from './index';

function* callSubmitMessage(action: Action) {
  yield put({ type: 'SET_LOADING', payload: true });
  yield put({ type: 'SET_AUTH_ERROR', payload: '' });
  try {
    const response = yield call(api.user.submitMessage, action.payload);
    yield put({
      type: 'SET_SUCCESS_MESSAGE',
      payload: 'Сообщение было отправлено успешно'
    });
    yield put({ type: 'SET_LOADING', payload: false });
  } catch (e) {
    yield put({ type: 'SET_LOADING', payload: false });
    yield put({ type: 'SET_AUTH_ERROR', payload: e.response.data.error });
  }
}

function* callGetStats(action: Action) {
  yield put({ type: 'SET_SEARCH_ERROR', payload: '' });
  try {
    const response = yield call(api.filters.fetchStats, action.payload);
    yield put({
      type: 'SET_STATS',
      payload: response.data
    });
  } catch (e) {
    yield put({
      type: 'SET_SEARCH_ERROR',
      payload: e.response.data.error ? e.response.data.error : 'Server-side error'
    });
  }
}

export default function* watchChangePassword(): SagaIterator {
  yield takeEvery('SUBMIT_MESSAGE', callSubmitMessage);
  yield takeEvery('GET_STATS', callGetStats);
}
