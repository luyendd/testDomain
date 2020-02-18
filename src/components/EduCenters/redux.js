import { QUERY_GET_GLOBAL } from "redux/actions";
const QUERY_GET_CLASS_ROOMS_BY_URL_SUCCEED = 'QUERY_GET_CLASS_ROOMS_BY_URL_SUCCEEDED';
const QUERY_GET_CLASS_ROOMS_BY_URL_FAIL = 'QUERY_GET_CLASS_ROOMS_BY_URL_FAILED';

export const getClassRoomsHome = (payload) => ({
    type: QUERY_GET_GLOBAL,
    reponses: {
        succeed: QUERY_GET_CLASS_ROOMS_BY_URL_SUCCEED,
        fail: QUERY_GET_CLASS_ROOMS_BY_URL_FAIL,
    },
    payload,
});

export const ClassRoomsHome = (state = {}, action) => {
    switch (action.type) {
        case QUERY_GET_CLASS_ROOMS_BY_URL_SUCCEED:
            return action.payload;
        default:
            return state;
    }
};