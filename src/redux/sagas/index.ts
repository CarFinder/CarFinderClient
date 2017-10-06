
function* rootSaga() {
    yield [
        watchLogIn()
    ]
}

export default rootSaga;
