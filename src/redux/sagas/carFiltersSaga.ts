import { SagaIterator } from 'redux-saga';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import api from '../../api/api';
import * as actionTypes from '../actions/actionTypes';

function* callFetchMarks(action: any) {
  yield put({ type: actionTypes.SET_LOADING, payload: true });
  yield put({ type: actionTypes.SET_SEARCH_ERROR, payload: '' });
  try {
    const response = yield call(api.filters.fetchMarks);
    yield put({ type: actionTypes.SET_LOADING, payload: false });
    yield put({ type: actionTypes.SET_MARKS_VALUES, payload: response.data.marks });
  } catch (e) {
    yield put({ type: actionTypes.SET_AUTH_ERROR, payload: e.response.data.error });
    yield put({ type: actionTypes.SET_LOADING, payload: false });
  }
}

export default function* watchCarFilters(): SagaIterator {
  yield takeEvery(actionTypes.FETCH_MARKS_VALUES, callFetchMarks);
}
