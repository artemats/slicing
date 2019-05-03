const jwt = require('jsonwebtoken');

export const enCode = (userData) => {

    const token = jwt.sign(
        userData,
        'user'
    );

    return token;

};