import { put, takeLatest } from 'redux-saga/effects';
import { QUERY_LOGOUT } from 'redux/actions';
import { USER_AUTHENTICATION_SUCCEED } from 'redux/reducers/Authentication-reducer';
import { USER_INFO_SUCCEED } from 'redux/reducers/UserInfo-reducer';
import { setLocal } from 'ultis/commom';

function* logoutFuc() {
    try {
        yield put({ type: USER_AUTHENTICATION_SUCCEED, payload: { status: false } });

        yield put({ type: USER_INFO_SUCCEED, payload: null });

        setLocal('userInfo', null);

    } catch (e) {
        console.log(e);
    }
}

export default function* initLogoutSaga() {
    yield takeLatest(QUERY_LOGOUT, logoutFuc);
}