import { QUERY_GET_GLOBAL } from "redux/actions";
const QUERY_GET_CLASS_ROOMS_HOME_BY_TEACHERS_SUCCEED = 'QUERY_GET_CLASS_ROOMS_HOME_BY_TEACHERS_SUCCEEDED';
const QUERY_GET_CLASS_ROOMS_HOME_BY_TEACHERS_FAIL = 'QUERY_GET_CLASS_ROOMS_HOME_BY_TEACHERS_FAILED';
const QUERY_GET_CLASS_ROOMS_HOME_BY_CENTERS_SUCCEED = 'QUERY_GET_CLASS_ROOMS_HOME_BY_CENTERS_SUCCEEDED';
const QUERY_GET_CLASS_ROOMS_HOME_BY_CENTERS_FAIL = 'QUERY_GET_CLASS_ROOMS_HOME_BY_CENTERS_FAILED';

export const getClassRoomsHomeByTeachers = (payload = { url: 'v3/courses/by-eduteacher' }) => ({
    type: QUERY_GET_GLOBAL,
    reponses: {
        succeed: QUERY_GET_CLASS_ROOMS_HOME_BY_TEACHERS_SUCCEED,
        fail: QUERY_GET_CLASS_ROOMS_HOME_BY_TEACHERS_FAIL,
    },
    payload,
});

export const ClassRoomsHomeByTeachers = (state = null, action) => {
    switch (action.type) {
        case QUERY_GET_CLASS_ROOMS_HOME_BY_TEACHERS_SUCCEED:
            return action.payload;
        default:
            return state;
    }
};

export const getClassRoomsHomeByCenters = (payload = { url: 'v3/courses/by-educenter' }) => ({
    type: QUERY_GET_GLOBAL,
    reponses: {
        succeed: QUERY_GET_CLASS_ROOMS_HOME_BY_CENTERS_SUCCEED,
        fail: QUERY_GET_CLASS_ROOMS_HOME_BY_CENTERS_FAIL,
    },
    payload,
});

export const ClassRoomsHomeByCenters = (state = null, action) => {
    switch (action.type) {
        case QUERY_GET_CLASS_ROOMS_HOME_BY_CENTERS_SUCCEED:
            return action.payload;
        default:
            return state;
    }
};