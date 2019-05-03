export const AUTH_CHANGE_EMAIL_TEXT = 'AUTH_CHANGE_EMAIL_TEXT';
export const AUTH_CHANGE_PASSWORD_TEXT = 'AUTH_CHANGE_PASSWORD_TEXT';

export const setEmailText = (email) => {

    return({
       type: AUTH_CHANGE_EMAIL_TEXT,
       payload: email
    });

};

export const setPasswordText = (password) => {

    return({
       type: AUTH_CHANGE_PASSWORD_TEXT,
       payload: password
    });

};