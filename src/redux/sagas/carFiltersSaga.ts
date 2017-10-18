import { SagaIterator } from 'redux-saga';
import { call, put, select, takeEvery } from 'redux-saga/effects';
import api from '../../api/api';
import { transformDataForSearch } from '../../utils/utils';
import * as actionTypes from '../actions/actionTypes';

function* callFetchMarks(action: any) {
  yield put({ type: actionTypes.SET_LOADING, payload: true });
  yield put({ type: actionTypes.SET_SEARCH_ERROR, payload: '' });
  try {
    const response = yield call(api.filters.fetchMarks);
    yield put({ type: actionTypes.SET_MARKS_VALUES, payload: response.data.marks });
    yield put({ type: actionTypes.SET_LOADING, payload: false });
  } catch (e) {
    yield put({ type: actionTypes.SET_SEARCH_ERROR, payload: 'Server-side error' });
    yield put({ type: actionTypes.SET_MARKS_VALUES, payload: [] });
    yield put({ type: actionTypes.SET_LOADING, payload: false });
  }
}

function* callFetchModels(action: any) {
  yield put({ type: actionTypes.SET_LOADING, payload: true });
  yield put({ type: actionTypes.SET_SEARCH_ERROR, payload: '' });
  try {
    const response = yield call(api.filters.fetchModels, action.payload);
    yield put({ type: actionTypes.SET_MODELS_VALUES, payload: response.data.models });
    yield put({ type: actionTypes.SET_LOADING, payload: false });
  } catch (e) {
    yield put({ type: actionTypes.SET_SEARCH_ERROR, payload: 'Server-side error' });
    yield put({ type: actionTypes.SET_MODELS_VALUES, payload: [] });
    yield put({ type: actionTypes.SET_LOADING, payload: false });
  }
}

function* callFetchBodyTypes(action: any) {
  yield put({ type: actionTypes.SET_LOADING, payload: true });
  yield put({ type: actionTypes.SET_SEARCH_ERROR, payload: '' });
  try {
    const response = yield call(api.filters.fetchBodyTypes);
    yield put({ type: actionTypes.SET_BODY_TYPES_VALUES, payload: response.data.bodyTypes });
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
    const sortingParams = select(getSortingParams);
    const data = transformDataForSearch(action.payload, sortingParams);
    const response = yield call(api.filters.fetchResults, data);
    yield put({ type: actionTypes.SET_FILTER_RESULTS, payload: response.data.ads });
    yield put({ type: actionTypes.SET_LOADING, payload: false });
  } catch (e) {
    yield put({ type: actionTypes.SET_SEARCH_ERROR, payload: 'Server-side error' });
    yield put({ type: actionTypes.SET_LOADING, payload: false });
  }
}

function* callUpdateFilterResults() {
  yield put({ type: actionTypes.SET_LOADING, payload: true });
  yield put({ type: actionTypes.SET_SEARCH_ERROR, payload: '' });
  try {
    const filterParams = select(getFilterParams);
    const sortingParams = select(getSortingParams);
    const data = transformDataForSearch(filterParams, sortingParams);
    const response = yield call(api.filters.fetchResults, data);
    yield put({ type: actionTypes.SET_FILTER_RESULTS, payload: response.data.ads });
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
  yield takeEvery(actionTypes.UPDATE_CURRENT_FILTER, callUpdateFilterResults);
}

export const getSortingParams = (state: any) => state.carFilters.sortingParams;
export const getFilterParams = (state: any) => state.carFilters.currentFilter;
