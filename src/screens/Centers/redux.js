import { QUERY_GET_GLOBAL } from "redux/actions";
const QUERY_GET_NEW_CENTERS_SUCCEED = 'QUERY_GET_NEW_CENTERS_SUCCEEDED';
const QUERY_GET_NEW_CENTERS_FAIL = 'QUERY_GET_NEW_CENTERS_FAILED';

export const getNewCenters = (payload = { url: 'v3/centers' }) => ({
    type: QUERY_GET_GLOBAL,
    reponses: {
        succeed: QUERY_GET_NEW_CENTERS_SUCCEED,
        fail: QUERY_GET_NEW_CENTERS_FAIL,
    },
    payload,
});

export const NewCenters = (state = {}, action) => {
    switch (action.type) {
        case QUERY_GET_NEW_CENTERS_SUCCEED:
            return action.payload;
        default:
            return state;
    }
};