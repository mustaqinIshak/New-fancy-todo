'use strict'

const express = require('express')
const router = express.Router()
const todoController = require('../controllers/todo')
const authentication = require('../middlewares/authentication')


router.post('/create/', authentication, todoController.create)
router.get('/', authentication, todoController.readAll)
router.get('/getOne/', authentication, todoController.readOne)
router.put('/update/', authentication, todoController.update)
router.put('/updateStatus/', authentication, todoController.updateStatus)
router.delete('/delete/',authentication, todoController.delete)

module.exports = router