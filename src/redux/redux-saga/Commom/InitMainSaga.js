import { put, takeLatest } from 'redux-saga/effects';
import { INIT_MAIN } from 'redux/actions';
import { USER_AUTHENTICATION_SUCCEED, USER_AUTHENTICATION_FAIL } from 'redux/reducers/Authentication-reducer';
import { USER_INFO_SUCCEED } from 'redux/reducers/UserInfo-reducer';
import { getLocal } from 'ultis/commom';

function* mainSaga() {
    try {
        const payload = getLocal('userInfo');

        if (payload != null) {
            yield put({ type: USER_AUTHENTICATION_SUCCEED, payload: { status: true } });

            yield put({ type: USER_INFO_SUCCEED, payload });
        }

    } catch (e) {
        console.log(e);
        yield put({ type: USER_AUTHENTICATION_FAIL });
    }
}

export default function* initMainSaga() {
    yield takeLatest(INIT_MAIN, mainSaga);
}