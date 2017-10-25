import { SagaIterator } from 'redux-saga';
import { call, put, takeEvery } from 'redux-saga/effects';
import api from '../../api/api';
import { transformDataForFilters, transformDataForSearch } from '../../utils/utils';
import * as actionTypes from '../actions/actionTypes';
import { Action } from './index';

function* callFetchMarks(action: Action) {
  yield put({ type: actionTypes.SET_LOADING, payload: true });
  yield put({ type: actionTypes.SET_SEARCH_ERROR, payload: '' });
  try {
    const response = yield call(api.filters.fetchMarks);
    const data = transformDataForFilters(response.data);
    yield put({ type: actionTypes.SET_MARKS_VALUES, payload: data });
    yield put({ type: actionTypes.SET_LOADING, payload: false });
  } catch (e) {
    yield put({ type: actionTypes.SET_SEARCH_ERROR, payload: 'Server-side error' });
    yield put({ type: actionTypes.SET_MARKS_VALUES, payload: [] });
    yield put({ type: actionTypes.SET_LOADING, payload: false });
  }
}

function* callFetchModels(action: Action) {
  yield put({ type: actionTypes.SET_LOADING, payload: true });
  yield put({ type: actionTypes.SET_SEARCH_ERROR, payload: '' });
  try {
    const response = yield call(api.filters.fetchModels, action.payload);
    const data = transformDataForFilters(response.data);
    yield put({ type: actionTypes.SET_MODELS_VALUES, payload: data });
    yield put({ type: actionTypes.SET_LOADING, payload: false });
  } catch (e) {
    yield put({ type: actionTypes.SET_SEARCH_ERROR, payload: 'Server-side error' });
    yield put({ type: actionTypes.SET_MODELS_VALUES, payload: [] });
    yield put({ type: actionTypes.SET_LOADING, payload: false });
  }
}

function* callFetchBodyTypes(action: Action) {
  yield put({ type: actionTypes.SET_LOADING, payload: true });
  yield put({ type: actionTypes.SET_SEARCH_ERROR, payload: '' });
  try {
    const response = yield call(api.filters.fetchBodyTypes);
    const data = transformDataForFilters(response.data);
    yield put({ type: actionTypes.SET_BODY_TYPES_VALUES, payload: data });
    yield put({ type: actionTypes.SET_LOADING, payload: false });
  } catch (e) {
    yield put({ type: actionTypes.SET_SEARCH_ERROR, payload: 'Server-side error' });
    yield put({ type: actionTypes.SET_BODY_TYPES_VALUES, payload: [] });
    yield put({ type: actionTypes.SET_LOADING, payload: false });
  }
}

function* callFetchFilterResults(action: any) {
  yield put({ type: actionTypes.SET_LOADING, payload: true });
  yield put({ type: actionTypes.SET_SEARCH_ERROR, payload: '' });
  try {
    const data = transformDataForSearch(action.payload, action.sortingParams);
    const response = yield call(api.filters.fetchResults, data);
    if (!response.data.length) {
      yield put({ type: actionTypes.SET_ADS_AS_LOADED, payload: true });
    }
    yield put({ type: actionTypes.SET_FILTER_RESULTS, payload: response.data });
    yield put({ type: actionTypes.SET_LOADING, payload: false });
  } catch (e) {
    yield put({ type: actionTypes.SET_SEARCH_ERROR, payload: 'Server-side error' });
    yield put({ type: actionTypes.SET_LOADING, payload: false });
  }
}

export default function* watchCarFilters(): SagaIterator {
  yield takeEvery(actionTypes.FETCH_MARKS_VALUES, callFetchMarks);
  yield takeEvery(actionTypes.FETCH_BODY_TYPES_VALUES, callFetchBodyTypes);
  yield takeEvery(actionTypes.FETCH_MODELS_VALUES, callFetchModels);
  yield takeEvery(actionTypes.SET_CURRENT_FILTER, callFetchFilterResults);
}
