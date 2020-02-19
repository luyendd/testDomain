import { call, put, takeEvery } from 'redux-saga/effects';
import { QUERY_GET_GLOBAL } from 'redux/actions';

function* getQuery({ url, data }) {
    // const myHeaders = new Headers();

    // const myRequest = new Request('url', {
    // 	method: 'GET',
    // 	headers: myHeaders,
    // 	mode: 'cors',
    // 	cache: 'default',
    // });

    // Default options are marked with *
    const response = yield fetch(`https://edutalk.edu.vn/api/${url}`)
        .then((response) => {
            if (!response.ok) {
                console.log(response);
                throw new Error('Network response was not ok');
            }
            return response;
        })
        .then((response) => {
            return response.json();
        })
        .catch((error) => {
            console.log(error);
            
            throw new Error(url, error);
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