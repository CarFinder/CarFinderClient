import { SagaIterator } from 'redux-saga';
import { call, put, takeEvery } from 'redux-saga/effects';
import api from '../../api/api';
import { Action } from './index';

function* callGetStats(action: Action) {
  yield put({ type: 'SET_SEARCH_ERROR', payload: '' });
  try {
    const response = yield call(api.stats.fetchStats, action.payload);
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
  yield takeEvery('GET_STATS', callGetStats);
}
