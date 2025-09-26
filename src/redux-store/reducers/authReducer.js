import { SET_CURRENT_USER, SET_IS_ADMIN, SET_TOKEN } from "../actionConstants";

const INITIAL_STATE = {
    token: null,
    isAdmin: false,
    currentUser: {},
};

export const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_TOKEN:
            return { ...state, token: action.payload };
        case SET_IS_ADMIN:
            return { ...state, isAdmin: action.payload };
        case SET_CURRENT_USER:
            return { ...state, currentUser: action.payload };
        default:
            return state;
    }
};