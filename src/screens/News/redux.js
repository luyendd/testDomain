import { QUERY_GET_GLOBAL } from "redux/actions";
const QUERY_GET_NEWS_SUCCEED = 'QUERY_GET_NEWS_SUCCEEDED';
const QUERY_GET_NEWS_FAIL = 'QUERY_GET_NEWS_FAILED';
const QUERY_GET_NEWS_DETAIL_SUCCEED = 'QUERY_GET_NEWS_DETAIL_SUCCEEDED';
const QUERY_GET_NEWS_DETAIL_FAIL = 'QUERY_GET_NEWS_DETAIL_FAILED';

export const getNews = (payload = { url: 'v3/posts' }) => ({
    type: QUERY_GET_GLOBAL,
    reponses: {
        succeed: QUERY_GET_NEWS_SUCCEED,
        fail: QUERY_GET_NEWS_FAIL,
    },
    payload,
});

export const News = (state = null, action) => {
    switch (action.type) {
        case QUERY_GET_NEWS_SUCCEED:
            return action.payload;
        default:
            return state;
    }
};

export const getNewDetail = (payload) => ({
    type: QUERY_GET_GLOBAL,
    reponses: {
        succeed: QUERY_GET_NEWS_DETAIL_SUCCEED,
        fail: QUERY_GET_NEWS_DETAIL_FAIL,
    },
    payload,
});

export const NewDetail = (state = null, action) => {
    switch (action.type) {
        case QUERY_GET_NEWS_DETAIL_SUCCEED:
            return action.payload;
        default:
            return state;
    }
};
