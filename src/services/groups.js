const request = require('./request.js');

let __API__ = '';

if ( process.env.NODE_ENV === 'production') {
    __API__ = 'https://api.loungedinosaur.dk';
} else {
    __API__ = 'http://localhost:8000';
}

function collection() {
    return request.get(`${__API__}/api/groups`)
        .then(function(response) {
            return response;
        });
}

function get(id) {
    return request.get(`${__API__}/api/group/members/${id}`)
        .then(function(response) {
            return response;
        });
}

module.exports = {
    collection: collection,
    get: get
};
