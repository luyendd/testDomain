import { call, put, takeLatest } from 'redux-saga/effects';
import { QUERY_POST_GLOBAL } from 'redux/actions';
import store from 'redux/store';

function* postQuery({ url, data }) {
    const param = {
        ...data,
        Authorization: ` Bearer ${store.getState().UserInfo.token}`,
    };

    let body = new FormData();
    body.append('json', JSON.stringify(param));

    const response = yield fetch(`http://127.0.0.1:8000/api/${url}`, {
        method: "POST",
        body: body,
        credentials: "same-origin",
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

function* fetchGlobalPostRequest(action) {
    try {
        console.log(action);

        const payload = yield call(postQuery, action.payload);
        console.log(payload);

        yield put({ type: action.reponses.succeed, payload });
    } catch (e) {
        console.log(e);

        yield put({ type: action.reponses.fail, payload: null });
    }
}

export default function* postGlobalSaga() {
    yield takeLatest(QUERY_POST_GLOBAL, fetchGlobalPostRequest);
}