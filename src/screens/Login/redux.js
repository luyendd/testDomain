import { QUERY_LOGIN } from "redux/actions";
const QUERY_POST_LOGIN_SUCCEED = 'QUERY_POST_LOGIN_SUCCEEDED';
const QUERY_POST_LOGIN_FAIL = 'QUERY_POST_LOGIN_FAILED';

export const login = (payload) => ({
    type: QUERY_LOGIN,
    reponses: {
        succeed: QUERY_POST_LOGIN_SUCCEED,
        fail: QUERY_POST_LOGIN_FAIL,
    },
    payload,
});