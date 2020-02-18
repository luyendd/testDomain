import { all } from 'redux-saga/effects';
import { getGlobalSaga, postGlobalSaga, loginSaga, initMainSaga, logoutSaga } from './redux-saga/Commom';

export default function* rootSaga() {
    yield all([
        initMainSaga(),
        getGlobalSaga(),
        postGlobalSaga(),
        loginSaga(),
        logoutSaga(),
    ]);
}