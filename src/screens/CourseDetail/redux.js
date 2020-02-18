import { QUERY_GET_GLOBAL } from "redux/actions";
const QUERY_GET_COURSE_DETAIL_SUCCEED = 'QUERY_GET_COURSE_DETAIL_SUCCEEDED';
const QUERY_GET_COURSE_DETAIL_FAIL = 'QUERY_GET_COURSE_DETAIL_FAILED';

export const getCourseDetail = (payload) => ({
    type: QUERY_GET_GLOBAL,
    reponses: {
        succeed: QUERY_GET_COURSE_DETAIL_SUCCEED,
        fail: QUERY_GET_COURSE_DETAIL_FAIL,
    },
    payload,
});

export const CourseDetail = (state = {}, action) => {
    switch (action.type) {
        case QUERY_GET_COURSE_DETAIL_SUCCEED:
            return action.payload;
        default:
            return state;
    }
};