'use strict'

const { Schema, model} = require("mongoose")

const noteSchema = new Schema ({
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
        type: Schema.Types.ObjectId, ref: 'User'
    }
})

const Note = model('Note', noteSchema)

module.exports = Note