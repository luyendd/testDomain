import { QUERY_GET_GLOBAL } from "redux/actions";
const QUERY_GET_SLIDER_DATA_SUCCEED = 'QUERY_GET_SLIDER_DATA_SUCCEEDED';
const QUERY_GET_SLIDER_DATA_FAIL = 'QUERY_GET_SLIDER_DATA_FAILED';

export const getSliderData = (payload) => ({
    type: QUERY_GET_GLOBAL,
    reponses: {
        succeed: QUERY_GET_SLIDER_DATA_SUCCEED,
        fail: QUERY_GET_SLIDER_DATA_FAIL,
    },
    payload,
});

export const SliderData = (state = null, action) => {
    switch (action.type) {
        case QUERY_GET_SLIDER_DATA_SUCCEED:
            return action.payload;
        default:
            return state;
    }
};