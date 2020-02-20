import { QUERY_GET_GLOBAL } from "redux/actions";
const QUERY_GET_USER_INFORMATION_SUCCEED = 'QUERY_GET_USER_INFORMATION_SUCCEEDED';
const QUERY_GET_USER_INFORMATION_FAIL = 'QUERY_GET_USER_INFORMATION_FAILED';

export const getUserInformation = (payload) => ({
    type: QUERY_GET_GLOBAL,
    reponses: {
        succeed: QUERY_GET_USER_INFORMATION_SUCCEED,
        fail: QUERY_GET_USER_INFORMATION_FAIL,
    },
    payload,
});

export const UserInformation = (state = {}, action) => {
    switch (action.type) {
        case QUERY_GET_USER_INFORMATION_SUCCEED:
            return action.payload;
        default:
            return state;
    }
};