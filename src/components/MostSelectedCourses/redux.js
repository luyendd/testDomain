import { QUERY_GET_GLOBAL } from "redux/actions";
const QUERY_GET_BEST_CLASS_ROOMS_BY_CENTER_HOME_SUCCEED = 'QUERY_GET_BEST_CLASS_ROOMS_BY_CENTER_HOME_SUCCEEDED';
const QUERY_GET_BEST_CLASS_ROOMS_BY_CENTER_HOME_FAIL = 'QUERY_GET_BEST_CLASS_ROOMS_BY_CENTER_HOME_FAILED';
const QUERY_GET_BEST_CLASS_ROOMS_BY_TEACHER_HOME_SUCCEED = 'QUERY_GET_BEST_CLASS_ROOMS_BY_TEACHER_HOME_SUCCEEDED';
const QUERY_GET_BEST_CLASS_ROOMS_BY_TEACHER_HOME_FAIL = 'QUERY_GET_BEST_CLASS_ROOMS_BY_TEACHER_HOME_FAILED';

export const getBestClassRoomsByCenter = (payload = { url: 'v3/courses/by-educenter?|popular=1' }) => ({
    type: QUERY_GET_GLOBAL,
    reponses: {
        succeed: QUERY_GET_BEST_CLASS_ROOMS_BY_CENTER_HOME_SUCCEED,
        fail: QUERY_GET_BEST_CLASS_ROOMS_BY_CENTER_HOME_FAIL,
    },
    payload,
});

export const BestClassRoomsByCenter = (state = null, action) => {
    switch (action.type) {
        case QUERY_GET_BEST_CLASS_ROOMS_BY_CENTER_HOME_SUCCEED:
            return action.payload;
        default:
            return state;
    }
};

export const getBestClassRoomsByTeacher = (payload = { url: 'v3/courses/by-eduteacher?|popular=1' }) => ({
    type: QUERY_GET_GLOBAL,
    reponses: {
        succeed: QUERY_GET_BEST_CLASS_ROOMS_BY_TEACHER_HOME_SUCCEED,
        fail: QUERY_GET_BEST_CLASS_ROOMS_BY_TEACHER_HOME_FAIL,
    },
    payload,
});

export const BestClassRoomsByTeacher = (state = null, action) => {
    switch (action.type) {
        case QUERY_GET_BEST_CLASS_ROOMS_BY_TEACHER_HOME_SUCCEED:
            return action.payload;
        default:
            return state;
    }
};

