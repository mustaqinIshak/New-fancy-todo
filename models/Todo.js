'use strict'

const { Schema, model} = require("mongoose")

const todoSchema = new Schema ({
    title: {
        type: String,
    },
    date: {
        type: Date
    },
    note: {
        type: String
    },
    userId: {
        required:[true, 'id user is required'],
        type: Schema.Types.ObjectId, ref: 'User'
    }
})

const Todo = model('Todo', todoSchema)

module.exports = Todo