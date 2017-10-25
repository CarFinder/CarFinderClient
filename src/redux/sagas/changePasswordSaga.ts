import jwt_decode from 'jwt-decode';
import { SagaIterator } from 'redux-saga';
import { call, put, takeEvery } from 'redux-saga/effects';
import API from '../../api/api';
import { UserData } from '../../containers/Signin';
import { Action } from './index';

function* callSubmitEmail(action: Action) {
  yield put({ type: 'SET_LOADING', payload: true });
  yield put({ type: 'SET_AUTH_ERROR', payload: '' });
  try {
    const response = yield call(API.user.submitEmail, action.payload);
    yield put({
      type: 'SET_SUCCESS_MESSAGE',
      payload: 'Мы отправили вам письмо. Пожалуйста, перейдите по ссылке чтобы изменить пароль'
    });
    yield put({ type: 'SET_LOADING', payload: false });
  } catch (e) {
    yield put({ type: 'SET_LOADING', payload: false });
    yield put({ type: 'SET_AUTH_ERROR', payload: e.response.data.error });
  }
}

function* callChangePassword(action: any) {
  yield put({ type: 'SET_LOADING', payload: true });
  yield put({ type: 'SET_AUTH_ERROR', payload: '' });
  try {
    const payload = {
      password: action.payload.password,
      token: action.token
    };
    const response = yield call(API.user.changePassword, payload);
    yield put({
      type: 'SET_SUCCESS_MESSAGE',
      payload: 'Пароль изменен успешно. Перенаправляем на страницу входа'
    });
    yield put({ type: 'SET_LOADING', payload: false });
  } catch (e) {
    yield put({ type: 'SET_LOADING', payload: false });
    yield put({ type: 'SET_AUTH_ERROR', payload: e.response.data.error });
  }
}

export default function* watchChangePassword(): SagaIterator {
  yield takeEvery('USER_SUBMIT_EMAIL', callSubmitEmail);
  yield takeEvery('USER_CHANGE_PASSWORD', callChangePassword);
}
