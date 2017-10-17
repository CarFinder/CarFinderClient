import { SagaIterator } from 'redux-saga';
import { call, put, select, takeEvery, takeLatest } from 'redux-saga/effects';
import api from '../../api/api';
import { transformDataForSearch } from '../../utils/utils';
import * as actionTypes from '../actions/actionTypes';

const marks = [
  {
    id: 1,
    name: 'Audi'
  },
  {
    id: 2,
    name: 'BMW'
  },
  {
    id: 3,
    name: 'Peugeot'
  },
  {
    id: 4,
    name: 'Volkswagen'
  }
];

const models = [
  {
    id: 1,
    name: 'Model 1'
  },
  {
    id: 2,
    name: 'Model 2'
  },
  {
    id: 3,
    name: 'Model 3'
  },
  {
    id: 4,
    name: 'Model 4'
  }
];

const bodyTypes = [
  {
    id: 1,
    name: 'Body Type 1'
  },
  {
    id: 2,
    name: 'Body Type 2'
  },
  {
    id: 3,
    name: 'Body Type 3'
  },
  {
    id: 4,
    name: 'Body Type 4'
  }
];

function* callFetchMarks(action: any) {
  yield put({ type: actionTypes.SET_LOADING, payload: true });
  yield put({ type: actionTypes.SET_SEARCH_ERROR, payload: '' });
  try {
    // const response = yield call(api.filters.fetchMarks);
    yield put({ type: actionTypes.SET_LOADING, payload: false });
    yield put({ type: actionTypes.SET_MARKS_VALUES, payload: marks });
  } catch (e) {
    yield put({ type: actionTypes.SET_SEARCH_ERROR, payload: e.response.data.error });
    yield put({ type: actionTypes.SET_LOADING, payload: false });
  }
}

function* callFetchModels(action: any) {
  yield put({ type: actionTypes.SET_LOADING, payload: true });
  yield put({ type: actionTypes.SET_SEARCH_ERROR, payload: '' });
  try {
    // const response = yield call(api.filters.fetchModels, action.payload);
    yield put({ type: actionTypes.SET_LOADING, payload: false });
    yield put({ type: actionTypes.SET_MODELS_VALUES, payload: models });
  } catch (e) {
    yield put({ type: actionTypes.SET_SEARCH_ERROR, payload: e.response.data.error });
    yield put({ type: actionTypes.SET_LOADING, payload: false });
  }
}

function* callFetchBodyTypes(action: any) {
  yield put({ type: actionTypes.SET_LOADING, payload: true });
  yield put({ type: actionTypes.SET_SEARCH_ERROR, payload: '' });
  try {
    // const response = yield call(api.filters.fetchBodyTypes);
    yield put({ type: actionTypes.SET_LOADING, payload: false });
    yield put({ type: actionTypes.SET_BODY_TYPES_VALUES, payload: bodyTypes });
  } catch (e) {
    yield put({ type: actionTypes.SET_SEARCH_ERROR, payload: e.response.data.error });
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
    yield put({ type: actionTypes.SET_LOADING, payload: false });
    // yield put({ type: HERE GOES ACTION, payload: HERE GOES PAYLOAD });
  } catch (e) {
    yield put({ type: actionTypes.SET_SEARCH_ERROR, payload: e.response.data.error });
    yield put({ type: actionTypes.SET_LOADING, payload: false });
  }
}

export default function* watchCarFilters(): SagaIterator {
  yield takeEvery(actionTypes.FETCH_MARKS_VALUES, callFetchMarks);
  yield takeEvery(actionTypes.FETCH_BODY_TYPES_VALUES, callFetchBodyTypes);
  yield takeEvery(actionTypes.FETCH_MODELS_VALUES, callFetchModels);
}

export const getSortingParams = (state: any) => state.carFilters.sortingParams;
