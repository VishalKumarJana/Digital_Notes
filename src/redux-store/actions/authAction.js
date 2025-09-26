import { SET_TOKEN, SET_IS_ADMIN, SET_CURRENT_USER } from "../actionConstants";

export function setToken(token) {
    return {
        type: SET_TOKEN,
        payload: token,
    };
}

export function setIsAdmin(isAdmin) {
    return {
        type: SET_IS_ADMIN,
        payload: isAdmin,
    };
}

export function setCurrentUser(currentUser) {
    return {
        type: SET_CURRENT_USER,
        payload: currentUser,
    };
}

export const startUserLogout = (redirect) => {
    return async () => {
        localStorage.clear();
        redirect();
    }
}