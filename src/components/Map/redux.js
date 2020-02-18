import { QUERY_GET_GLOBAL } from "redux/actions";
const QUERY_GET_ALL_LOCATION_SUCCEED = 'QUERY_GET_ALL_LOCATION_SUCCEEDED';
const QUERY_GET_ALL_LOCATION_FAIL = 'QUERY_GET_ALL_LOCATION_FAILED';

export const getAllLocation = (payload) => ({
    type: QUERY_GET_GLOBAL,
    reponses: {
        succeed: QUERY_GET_ALL_LOCATION_SUCCEED,
        fail: QUERY_GET_ALL_LOCATION_FAIL,
    },
    payload,
});

export const AllLocation = (state = null, action) => {
    switch (action.type) {
        case QUERY_GET_ALL_LOCATION_SUCCEED:
            return action.payload;
        default:
            return state;
    }
};