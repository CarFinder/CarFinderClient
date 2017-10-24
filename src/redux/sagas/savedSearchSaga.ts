import { SagaIterator } from 'redux-saga';
import { call, put, takeEvery } from 'redux-saga/effects';
import api from '../../api/api';
import { transformDataForSave } from '../../utils/utils';
import * as actionTypes from '../actions/actionTypes';
import { SavedSearchAction } from '../actions/savedSearchActions';
import { Action } from './index';

function* callFetchSavedSearchFilters(action: Action) {
  yield put({ type: actionTypes.SET_LOADING, payload: true });
  yield put({ type: actionTypes.SET_SEARCH_ERROR, payload: '' });
  try {
    const response = yield call(api.savedSearch.fetchFilters);
    yield put({ type: actionTypes.SET_SAVED_SEARCH_FILTERS, payload: response.data });
    yield put({ type: actionTypes.SET_LOADING, payload: false });
  } catch (e) {
    yield put({ type: actionTypes.SET_SEARCH_ERROR, payload: 'Server-side error' });
    yield put({ type: actionTypes.SET_SAVED_SEARCH_FILTERS, payload: [] });
    yield put({ type: actionTypes.SET_LOADING, payload: false });
  }
}

function* callSubmitSavedSearchFilters(action: Action) {
  yield put({ type: actionTypes.SET_LOADING, payload: true });
  yield put({ type: actionTypes.SET_SEARCH_ERROR, payload: '' });
  try {
    const data = transformDataForSave(action.payload);
    yield call(api.savedSearch.submitSavedFilter, data);
    yield put({
      type: actionTypes.SET_SUCCESS_MESSAGE,
      payload:
        'We have successfully saved your filter options. You can find more about it on your Home Page'
    });
    yield put({ type: actionTypes.SET_LOADING, payload: false });
  } catch (e) {
    yield put({ type: actionTypes.SET_SEARCH_ERROR, payload: 'Server-side error' });
    yield put({ type: actionTypes.SET_LOADING, payload: false });
  }
}

export default function* watchSavedSearch(): SagaIterator {
  yield takeEvery(actionTypes.FETCH_SAVED_FILTERS, callFetchSavedSearchFilters);
  yield takeEvery(actionTypes.SUBMIT_SAVED_FILTERS, callSubmitSavedSearchFilters);
}
