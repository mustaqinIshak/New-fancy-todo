'use strict'

const Todo = require('../models/Todo')

class todoController {
    static async create(req, res, next) {
        try {
            const {title, date, note } = req.body
            const userId = req.query.userId

            let newTodo = await Todo.create({
                title: title,
                date: date,
                note: note,
                userId: userId
            })

            res.status(201).json({message: "create todo success", result: newTodo})
        } catch(err) {
            next(err)
        }
    }

    static async readAll (req, res, next) {
        try {
            const find = await Todo.find({ userId: req.query.userId })

            res.status(200).json({ result: find })

        } catch(err) {
            next(err)
        }

    }

    static async readOne (req, res, next) {
        try {

            const { userId, todoId } = req.query
            const findOne = await Todo.findOne({ _id: todoId, userId: userId })

            res.status(200).json(findOne)
        } catch (err) {
            next(err)
        }

    }

    static async update (req, res, next) {
        try {
            const todoId = req.query.todoId
            const {title, date, note} = req.body
            const findAndUpdate = await Todo.findByIdAndUpdate({_id : todoId} , 
                { 
                    title: title,
                    date: date,
                    note: note
                
                }
            )

            if(!findAndUpdate){ 
                throw {
                    message: 'not found',
                    status: 404
                }
            }
            res.status(200).json({message: "update success"})

        } catch (err) {
            next(err)
        }
    }

    static async delete (req, res, next) {
        try {
            const todoId  = req.query.todoId

            const findAndDelete= await Todo.findByIdAndDelete({_id: todoId})
            console.log(findAndDelete)
            if(!findAndDelete) {
                throw {
                    message: 'not found',
                    status: 404
                }
            }
            res.status(202).json({message: 'delete success'})

        } catch (err) {
            next(err)
        }
    }
}

module.exports = todoController