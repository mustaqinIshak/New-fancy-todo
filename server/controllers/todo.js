'use strict'

const Todo = require('../models/Todo')

class todoController {
    static async create(req, res, next) {
        try {
            const {date, todo } = req.body
            const userId = req.userId

            let newTodo = await Todo.create({
                date: date,
                todo: todo,
                userId: userId
            })

            res.status(201).json({message: "create todo success", result: newTodo})
        } catch(err) {
            next(err)
        }
    }

    static async readAll (req, res, next) {
        try {
            
            const find = await Todo.find({ userId: req.userId })
            res.status(200).json({ result: find })

        } catch(err) {
            next(err)
        }

    }

    static async readOne (req, res, next) {
        try {

            const { todoId } = req.query
            const userId = req.userId
            const findOne = await Todo.findOne({ _id: todoId, userId: userId })

            res.status(200).json(findOne)
        } catch (err) {
            next(err)
        }

    }

    static async update (req, res, next) {
        try {
            const todoId = req.query.todoId
            const {date, todo, status} = req.body
            const userId = req.userId
            if(status === "not" || status === "done"){
                const findAndUpdate = await Todo.findOneAndUpdate({_id : todoId, userId: userId} , 
                    { 
                        date: date,
                        todo: todo,
                        status: status
                    }
                )
    
                if(!findAndUpdate){ 
                    throw {
                        message: 'not found',
                        status: 404
                    }
                }
                res.status(200).json({message: "update success"})
            }
            throw{
                message: "parameter must be not/done",
                status: 400
            }

        } catch (err) {
            next(err)
        }
    }

    static async updateStatus (req, res, next){
        try{
            const { todoId } = req.query
            const { status } = req.body
            const userId = req.userId

            if(status === "not" || status === "done"){
                const findUpdateStatus = await Todo.findOneAndUpdate({_id : todoId, userId: userId}, {
                    status: status
                })
    
                if(!findUpdateStatus){
                    throw {
                        message: 'not found',
                        status: 404
                    }
                }
                res.status(200).json({message: "update status success"})
            }
            throw{
                message: "parameter must be not/done",
                status: 400
            }
            
        } catch(err){
            next(err)
        }
    }

    static async delete (req, res, next) {
        try {
            const todoId  = req.query.todoId
            const userId = req.userId

            const findAndDelete= await Todo.findOneAndDelete({_id: todoId, userId: userId})
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