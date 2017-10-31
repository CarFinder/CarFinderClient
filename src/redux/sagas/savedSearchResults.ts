import { SagaIterator } from 'redux-saga';
import { call, put, takeEvery } from 'redux-saga/effects';
import api from '../../api/api';
import * as actionTypes from '../actions/actionTypes';
import { Action } from './index';

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

function* callRemoveSavedFilterById(action: Action) {
  yield put({ type: actionTypes.SET_LOADING, payload: true });
  yield put({ type: actionTypes.SET_SEARCH_ERROR, payload: '' });
  try {
    yield call(api.savedSearch.removeSavedFilterById, action.payload);
    yield put({ type: actionTypes.FETCH_SAVED_SEARCH_RESULTS });
  } catch (e) {
    yield put({ type: actionTypes.SET_SEARCH_ERROR, payload: 'Server-side error' });
    yield put({ type: actionTypes.SET_LOADING, payload: false });
  }
}

function* callRemoveAllSavedFilters() {
  yield put({ type: actionTypes.SET_LOADING, payload: true });
  yield put({ type: actionTypes.SET_SEARCH_ERROR, payload: '' });
  try {
    yield call(api.savedSearch.removeAllSavedFilters);
    yield put({ type: actionTypes.FETCH_SAVED_SEARCH_RESULTS });
  } catch (e) {
    yield put({ type: actionTypes.SET_SEARCH_ERROR, payload: 'Server-side error' });
    yield put({ type: actionTypes.SET_LOADING, payload: false });
  }
}

export default function* watchSavedSearchResults(): SagaIterator {
  yield takeEvery(actionTypes.FETCH_SAVED_SEARCH_RESULTS, callFetchSavedSearchResults);
  yield takeEvery(actionTypes.REMOVE_ALL_SAVED_FILTERS, callRemoveAllSavedFilters);
  yield takeEvery(actionTypes.REMOVE_SAVED_FILTER, callRemoveSavedFilterById);
}
