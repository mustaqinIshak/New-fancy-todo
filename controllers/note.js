'use strict'

const Note = require('../models/Note')

class noteController {
    static async create(req, res, next) {
        try {
            const {title, date, note, userId} = req.body

            let newNote = await new Note.create({
                title: title,
                date: date,
                note: note,
                userId: userId
            })

            res.status(201).json({message: "create note success", result: newNote})
        } catch(err) {
            next(err)
        }
    }

    static async readAll (req, res, next) {
        try {

        } catch(err) {

        }

    }

    static async readOne (req, res, next) {
        try {
            
        } catch (err) {
            
        }

    }

    static async update (req, res, next) {
        try {
            
        } catch (err) {
            
        }
    }

    static async delete (req, res, next) {
        try {
            
        } catch (err) {
            
        }
    }
}

module.exports = noteController