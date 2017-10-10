import API from '../../api/api';
import { UserData } from '../../containers/Signin';
import setAuthorizationHeader from '../../utils/axiosHeader';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import jwt_decode from 'jwt-decode';

function* callSignin(action: any) {
  yield put({ type: 'SET_LOADING', payload: true });
  try {
    const response = yield call(API.user.getUser, action.payload);
    if (!response.data.error) {
      const decodedData = jwt_decode(response.data.token);
      localStorage.setItem('jwt', response.data.token);
      setAuthorizationHeader(response.data.token);

      yield put({ type: 'SET_LOADING', payload: false });
      yield put({ type: 'USER_SIGN_IN_SUCCESS', payload: decodedData });
    } else {
      yield put({ type: 'SET_LOADING', payload: false });
      yield put({ type: 'SET_AUTH_ERROR', payload: response.data.error });
    }
  } catch (e) {
    yield put({ type: 'SET_LOADING', payload: false });
    yield put({ type: 'SET_AUTH_ERROR', payload: e.message });
  }
}

export default function* watchLogIn(): SagaIterator {
  yield takeEvery('USER_SIGN_IN', callSignin);
}
