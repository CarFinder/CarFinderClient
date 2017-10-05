import API from '../../api/api'
import { UserData } from '../../containers/Signin'

import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

function* fetchUser(userData: any) {
    try {
        const user = yield call(API.user.getUser, userData.payload);
        const receivedData = {
           email: user.email,
           name: user.name,
           id: user.id
       }
       yield put({type: "USER_LOGGED_IN", user: receivedData});
    } catch (e) {
       yield put({type: "GET_USERDATA_FAILED", message: e.message});
    }
 }
 
function* watchLogIn() {
    yield takeEvery("GET_USERDATA", fetchUser);
}

function* rootSaga() {
    yield [
        watchLogIn()
    ]
}

export default rootSaga;
