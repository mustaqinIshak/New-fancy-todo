'use strict'

module.exports = (err, req, res, next) => {

    let status, message
    switch (err.name) {
        case 'ValidationError':
            status = 400
            message = err.message
            break;
        case 'jsonWebTokenError' :
            status = 401
            message = "invalid access token"
            break;
        default:
            status= err.status || 500
            message= err.message || 'internal server error'
            break;
    }

    res.status(status).json({ message })
}