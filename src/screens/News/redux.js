import { QUERY_GET_GLOBAL } from "redux/actions";
const QUERY_GET_SPECIAL_NEW_HOME_SUCCEED = 'QUERY_GET_SPECIAL_NEW_HOME_SUCCEEDED';
const QUERY_GET_SPECIAL_NEW_HOME_FAIL = 'QUERY_GET_SPECIAL_NEW_HOME_FAILED';
const QUERY_GET_EXPERIENCE_NEW_HOME_SUCCEED = 'QUERY_GET_EXPERIENCE_NEW_HOME_SUCCEEDED';
const QUERY_GET_EXPERIENCE_NEW_HOME_FAIL = 'QUERY_GET_EXPERIENCE_NEW_HOME_FAILED';

export const getSpecialNewHome = (payload = { url: 'v3/posts?termId=1' }) => ({
    type: QUERY_GET_GLOBAL,
    reponses: {
        succeed: QUERY_GET_SPECIAL_NEW_HOME_SUCCEED,
        fail: QUERY_GET_SPECIAL_NEW_HOME_FAIL,
    },
    payload,
});

export const SpecialNewHome = (state = null, action) => {
    switch (action.type) {
        case QUERY_GET_SPECIAL_NEW_HOME_SUCCEED:
            return action.payload;
        default:
            return state;
    }
};

export const getExperienceHome = (payload = { url: 'v3/posts?termId=2' }) => ({
    type: QUERY_GET_GLOBAL,
    reponses: {
        succeed: QUERY_GET_EXPERIENCE_NEW_HOME_SUCCEED,
        fail: QUERY_GET_EXPERIENCE_NEW_HOME_FAIL,
    },
    payload,
});

export const ExperienceNewHome = (state = null, action) => {
    switch (action.type) {
        case QUERY_GET_EXPERIENCE_NEW_HOME_SUCCEED:
            return action.payload;
        default:
            return state;
    }
};
