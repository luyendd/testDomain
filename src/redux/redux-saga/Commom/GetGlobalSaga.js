import { call, put, takeEvery } from 'redux-saga/effects';
import { QUERY_GET_GLOBAL } from 'redux/actions';
import store from 'redux/store';

function* getQuery({ url, data }) {
    // const myHeaders = new Headers();

    // const myRequest = new Request('url', {
    // 	method: 'GET',
    // 	headers: myHeaders,
    // 	mode: 'cors',
    // 	cache: 'default',
    // });

    // Default options are marked with *
    const response = yield fetch(`https://edutalk.edu.vn/api/${url}`, {
        headers: {
            'Authorization': `Bearer ${store.getState().UserInfo.token}`,
        },
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

function* fetchGlobalGetRequest(action) {
    try {
        const data = yield call(getQuery, action.payload);
        yield put({ type: action.reponses.succeed, payload: data });
    } catch (e) {
        console.log(e);

        yield put({ type: action.reponses.fail, payload: null });
    }
}

export default function* getGlobalSaga() {
    yield takeEvery(QUERY_GET_GLOBAL, fetchGlobalGetRequest);
}