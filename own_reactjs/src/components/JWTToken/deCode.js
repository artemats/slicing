const jwt = require('jsonwebtoken');

export const deCode = (userData) => {

    const payload = jwt.verify(
        userData,
        'user'
    );

    return payload;

};