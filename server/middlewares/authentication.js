'use strict'

const { verifyToken } = require("../helpers/jwt")

async function authentication (req, res, next) {
    try{
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]

        if(token == null) {
            throw({
                message: 'token is required',
                status: 401
            })
        } else {
            const verify= await verifyToken(token)
            if(verify.id === req.query.userId) {
                next()
            } else {
                throw({
                    message: 'invalid Id',
                    status: 403
                })
            }
        }
        

    } catch(err) {
        next(err)
    }
}

module.exports = authentication