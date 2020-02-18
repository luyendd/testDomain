import { call, put, takeLatest } from 'redux-saga/effects';
import { QUERY_LOGIN } from 'redux/actions';
import { USER_AUTHENTICATION_SUCCEED, USER_AUTHENTICATION_FAIL } from 'redux/reducers/Authentication-reducer';
import { USER_INFO_SUCCEED } from 'redux/reducers/UserInfo-reducer';
import { setLocal } from 'ultis/commom';

function* login({ data }) {
    const response = yield fetch(`https://edutalk.edu.vn/api/login`, {
        method: "POST", body: data,
    })
        .then(r => {
            return r.json().then(data => ({ ok: r.ok, status: r.status, body: data }))
        })
        .then(r => {
            if (r.ok === false) {
                throw new Error(r.body.error);
            } else {
                return r.body;
            }
        });

    return response;
}

function* fetchLogin(action) {
    try {
        const payload = yield call(login, action.payload);

        yield put({ type: USER_AUTHENTICATION_SUCCEED, payload: { status: true } });

        yield put({ type: USER_INFO_SUCCEED, payload });

        const data = {
            ...payload,
            type: USER_INFO_SUCCEED,
        }
        setLocal('userInfo', data);
    } catch (e) {
        console.log(e);

        yield put({ type: USER_AUTHENTICATION_FAIL, payload: { error: e } });
    }
}

export default function* loginSaga() {
    yield takeLatest(QUERY_LOGIN, fetchLogin);
}