import API from '../../api/api'
import { UserData } from '../../containers/Signin'
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { SagaIterator } from 'redux-saga';
import jwt_decode from 'jwt-decode';

function* fetchUser(userData: any) {
    yield put({type: "SET_LOADING", payload: true});
    try {
        const user = yield call(API.user.getUser, userData.payload);
        const decodedData = jwt_decode(user.data.token);
        localStorage.setItem('jwt', user.data.token);
        yield put({type: "USER_LOGGED_IN", user: decodedData});
            yield put({type: "SET_LOADING", payload: false});
            yield put({type: "SET_LOADING", payload: false});
    } catch (e) {
       yield put({type: "SET_AUTH_ERROR", message: e.message});
        yield put({type: "SET_LOADING", payload: false});
    }
 }
 
export default function* watchLogIn(): SagaIterator {
    yield takeEvery("USER_SIGN_IN", fetchUser);
}
