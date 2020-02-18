import { QUERY_GET_GLOBAL } from "redux/actions";
const QUERY_GET_CENTER_DETAIL_SUCCEED = 'QUERY_GET_CENTER_DETAIL_SUCCEEDED';
const QUERY_GET_CENTER_DETAIL_FAIL = 'QUERY_GET_CENTER_DETAIL_FAILED';

export const getCenterDetail = (payload) => ({
    type: QUERY_GET_GLOBAL,
    reponses: {
        succeed: QUERY_GET_CENTER_DETAIL_SUCCEED,
        fail: QUERY_GET_CENTER_DETAIL_FAIL,
    },
    payload,
});

export const CenterDetail = (state = null, action) => {
    switch (action.type) {
        case QUERY_GET_CENTER_DETAIL_SUCCEED:
            return action.payload;
        default:
            return state;
    }
};