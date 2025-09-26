import toast from "react-hot-toast";
import { setCurrentUser, setIsAdmin, setToken } from "../actions/authAction";
import api from "./api";
import { fetchUserFromToken } from "../../store/api-integrate";

export const fetchUser = (token) => {
    console.log("Fetching user with token:", token);

    return async (dispatch) => {
        fetchUserFromToken(token)
            .then((user) => {
                dispatch(setCurrentUser(user));
                const roles = user && user.roles || [];

                const isAdmin = roles.find((role) => role.roleName && (role.roleName.includes("ADMIN") || role.roleName.includes("DELEGATE")));
                if (isAdmin) {
                    console.log(isAdmin);
                    dispatch(setIsAdmin(true));
                } else {
                    dispatch(setIsAdmin(false));
                }
                console.log("User fetched:", user);
            }).catch((error) => {
                console.error("Error in fetchUserFromToken:", error);
                throw error;
            });

    }
};