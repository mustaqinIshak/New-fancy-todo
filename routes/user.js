'use strict'

const express = require("express")
const router = express.Router()
const userController = require("../controllers/user")

router.post('/users/register', userController.register)

module.exports = router