'use strict'

const { Schema, model} = require("mongoose")

const todoSchema = new Schema ({
    date: {
        type: Date,
        default: Date.now
    },
    todo: {
        type: String
    },
    status: {
        type: String,
        default: 'not'
    },
    userId: {
        required:[true, 'id user is required'],
        type: Schema.Types.ObjectId, ref: 'User'
    }
})

const Todo = model('Todo', todoSchema)

module.exports = Todo