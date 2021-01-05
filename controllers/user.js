'use strict'

const User = require("../models/User")
const {generateToken} = require("../helpers/jwt")

class userController {
    static async register (req, res, next) {
        try {

            const { username, password} = req.body
            let newUser = await User.create({ username: username, password: password})
            const token = await generateToken(newUser._id)
            const data = {
                id :newUser._id,
                username: newUser.username,
                token: token
            }

            res.status(201).json(data)
        } catch (err) {
            next(err)
        }

    }
}

module.exports = userController