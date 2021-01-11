'use strict'

const { Schema, model, models } = require("mongoose")
const bcrypt = require("bcrypt")

const userSchema = new Schema ({
    username: {
        type: String,
        required: [true, 'Username cannot empty'],
        validate: [{
            validator: (value) => {
                return models.User.findOne({ username: value})
                .then(result => {
                    if(result) {
                        return false
                    }
                })
            },
            msg: 'Email has already taken'
        }]
    },
    password: {
        type:String,
        required: [true, 'password cannot be empty']
    }
})

userSchema.pre("save", function(next) {
    const salt = bcrypt.genSaltSync(11)
    this.password = bcrypt.hashSync(this.password, salt)
    next()
})

const User = model('User', userSchema)

module.exports = User;