const request = require('./request.js');

let __API__ = '';

if ( process.env.NODE_ENV === 'production') {
    __API__ = 'https://api.loungedinosaur.dk';
} else {
    __API__ = 'http://localhost:8000';
}

function create(user) {
    return request.post(`${__API__}/api/user`, user)
        .then(function(response) {
            return response;
        });
}

function auth(user) {
    return request.post(`${__API__}/api/auth`, user)
        .then(function(response) {
            return response;
        });
}

module.exports = {
    create: create,
    auth: auth
};
