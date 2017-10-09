import API from '../../api/api'
import { UserData } from '../../containers/Signin'
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { SagaIterator } from 'redux-saga';
import jwt_decode from 'jwt-decode';

function* fetchUser(userData: any) {
    yield put({type: "SET_LOADING", payload: true});
    try {
        const { response, error } = yield call(API.user.getUser, userData.payload)
        if (response) {
            const decodedData = jwt_decode(response.token);
            localStorage.setItem('jwt', response.token);
            yield put({type: "SET_LOADING", payload: false});
            yield put({type: "USER_LOGGED_IN", user: decodedData});
        } else {
            yield put({type: "SET_LOADING", payload: false});
            yield put({type: "SET_AUTH_ERROR", payload: "Cannot reach server"});
        }
    } catch (e) {
        yield put({type: "SET_LOADING", payload: false});
        yield put({type: "SET_AUTH_ERROR", payload: e.message});
    }
 }
 
export default function* watchLogIn(): SagaIterator {
    yield takeEvery("USER_SIGN_IN", fetchUser);
}
