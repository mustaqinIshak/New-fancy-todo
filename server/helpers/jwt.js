'use strict'

const jwt = require('jsonwebtoken')

function generateToken (payload) {
    console.log(payload)
    return jwt.sign({id: payload}, process.env.JWT_SECRET)
}

function verifyToken (payload) {
    return jwt.verify(payload, process.env.JWT_SECRET)
}

module.exports = {
    generateToken,
    verifyToken
}