export const USER_INFO_SUCCEED = 'USER_INFO_SUCCEED';
export const USER_INFO_FAIL = 'USER_INFO_FAIL';

const initialState = {
    user: null,
    token: ''
};

export const UserInfo = (state = initialState, { type, payload }) => {
    switch (type) {
        case USER_INFO_SUCCEED:
            return payload;
        case USER_INFO_FAIL:
            return payload ? payload : state;
        default:
            return state;
    }
};