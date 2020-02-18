import { QUERY_GET_GLOBAL } from "redux/actions";
const QUERY_GET_NEW_TEACHERS_SUCCEED = 'QUERY_GET_NEW_TEACHERS_SUCCEEDED';
const QUERY_GET_NEW_TEACHERS_FAIL = 'QUERY_GET_NEW_TEACHERS_FAILED';

export const getNewTeachers = (payload = { url: 'v3/teachers' }) => ({
    type: QUERY_GET_GLOBAL,
    reponses: {
        succeed: QUERY_GET_NEW_TEACHERS_SUCCEED,
        fail: QUERY_GET_NEW_TEACHERS_FAIL,
    },
    payload,
});

export const NewTeachers = (state = {}, action) => {
    switch (action.type) {
        case QUERY_GET_NEW_TEACHERS_SUCCEED:
            return action.payload;
        default:
            return state;
    }
};