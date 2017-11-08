import { SagaIterator } from 'redux-saga';
import { call, put, takeEvery } from 'redux-saga/effects';
import api from '../../api/api';
import actionTypes from '../actions/actionTypes';
import { Action } from './index';

function* callGetLiquidAds(action: Action) {
  yield put({ type: actionTypes.SET_LOADING, payload: true });
  yield put({ type: actionTypes.SET_SEARCH_ERROR, payload: '' });
  try {
    const response = yield call(api.liquidAds.fetchLiquidAds);
    yield put({ type: actionTypes.SET_LIQUID_ADS, payload: response.data });
    yield put({ type: actionTypes.SET_LOADING, payload: false });
  } catch (e) {
    yield put({ type: actionTypes.SET_LOADING, payload: false });
    yield put({ type: actionTypes.SET_SEARCH_ERROR, payload: e.response.data.error });
  }
}

export default function* watchChangePassword(): SagaIterator {
  yield takeEvery(actionTypes.GET_LIQUID_ADS, callGetLiquidAds);
}
