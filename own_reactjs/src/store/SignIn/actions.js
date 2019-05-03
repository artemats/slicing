export const LOGIN_USER = 'LOGIN_USER';

export const loginUser = (isLoggedIn) => {

    return {

        type: LOGIN_USER,
        payload: isLoggedIn

    };

};