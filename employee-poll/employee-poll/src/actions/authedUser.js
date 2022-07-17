export const AUTHED_USER = "AUTHED_USER";
export const LOGOUT_USER = "LOGOUT_USER";

export function setAuthedUser(authedUser) {
    return {
        type: AUTHED_USER,
        authedUser,
    };
}

export function logoutAuthedUser() {
    return {
        type: LOGOUT_USER,
    };
}

export function handleLogin(username, password) {
    return (dispatch, getState) => {
        const {users} = getState();

        const user = Object.values(users).find((user) => user.id === username && user.password === password);

        if (user) {
          
            return dispatch(setAuthedUser(user));
        }
    };
}

export function handleLogout() {
    return (dispatch) => {
        return dispatch(logoutAuthedUser());
    };
}
