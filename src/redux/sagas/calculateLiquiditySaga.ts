import { SagaIterator } from 'redux-saga';
import { call, put, takeEvery } from 'redux-saga/effects';
import api from '../../api/api';
import { transformDataForLiquidity } from '../../utils/utils';
import * as actionTypes from '../actions/actionTypes';
import { Action } from './index';

function* callCalculateLiquidity(action: Action) {
  yield put({ type: actionTypes.SET_LOADING, payload: true });
  yield put({ type: actionTypes.SET_SEARCH_ERROR, payload: '' });
  try {
    const data = transformDataForLiquidity(action.payload);
    const response = yield call(api.liquidity.getLiquidity, data);
    yield put({ type: actionTypes.GET_LIQUIDITY, payload: response.data });
    yield put({ type: actionTypes.SET_LOADING, payload: false });
  } catch (e) {
    yield put({
      type: actionTypes.SET_SEARCH_ERROR,
      payload: e.response.data.error ? e.response.data.error : 'Server-side error'
    });
    yield put({ type: actionTypes.SET_LOADING, payload: false });
  }
}

export default function* watchCalculateLiquidity(): SagaIterator {
  yield takeEvery(actionTypes.CALCULATE_LIQUIDITY, callCalculateLiquidity);
}
