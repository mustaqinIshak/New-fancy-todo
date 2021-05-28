'use strict'

const User = require("../models/User")
const {generateToken} = require("../helpers/jwt")
const bcrypt = require('bcrypt')

class userController {
    static async register (req, res, next) {
        try {

            const { username, password} = req.body
            let newUser = await User.create({ username: username, password: password})
            const token = await generateToken(newUser._id)
            const message = {
                message: "register is success"
            }

            res.status(201).json(message)
        } catch (err) {
            next(err)
        }

    }

    static async login (req, res, next) {
        try {
            const { username, password } = req.body

            const user = await User.findOne( {username: username})

            if(!user) {
                throw {
                    message: 'username/password is wrong',
                    status: 401
                }
            } else {
                const match = await bcrypt.compare(password, user.password)

                if(!match){
                    throw {
                        message: 'username/password is wrong',
                        status: 401
                    } 
                } else {
                    const token = await generateToken(user._id)
                    const data = {
                        id : user._id,
                        username : user.username,
                        token : token
                    }

                    res.status(200).json(data)
                }
            }
        } catch(err) {
            next(err)
        }
    }
}

module.exports = userController