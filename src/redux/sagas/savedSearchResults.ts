import { SagaIterator } from 'redux-saga';
import { call, put, takeEvery } from 'redux-saga/effects';
import api from '../../api/api';
import * as actionTypes from '../actions/actionTypes';

function* callFetchSavedSearchResults() {
  yield put({ type: actionTypes.SET_LOADING, payload: true });
  yield put({ type: actionTypes.SET_SEARCH_ERROR, payload: '' });
  try {
    const response = yield call(api.savedSearch.fetchSavedSearchResults);
    yield put({ type: actionTypes.SET_SAVED_SEARCH_RESULTS, payload: response.data });
    yield put({ type: actionTypes.SET_LOADING, payload: false });
  } catch (e) {
    yield put({ type: actionTypes.SET_SEARCH_ERROR, payload: 'Server-side error' });
    yield put({ type: actionTypes.SET_LOADING, payload: false });
  }
}

export default function* watchSavedSearchResults(): SagaIterator {
  yield takeEvery(actionTypes.FETCH_SAVED_SEARCH_RESULTS, callFetchSavedSearchResults);
}
