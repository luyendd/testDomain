export const USER_AUTHENTICATION_SUCCEED = 'USER_AUTHENTICATION_SUCCEED';
export const USER_AUTHENTICATION_FAIL = 'USER_AUTHENTICATION_FAIL';

const initialState = {
    status: false,
    error: '',
};

export const Authentication = (state = initialState, { type, payload }) => {
    switch (type) {
        case USER_AUTHENTICATION_SUCCEED:
            return payload;
        case USER_AUTHENTICATION_FAIL:
            return payload ? payload : state;
        default:
            return state;
    }
};