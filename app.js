'use strict'

// if(process.env.NODE_ENV == 'development') {
// }
require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")
const routes = require("./routes/index")
const erroHandler = require("./middlewares/errorhandler")

mongoose.connect(process.env.MONGO_URL, {userNewUrlParser: true, useUnifiedTopology: true, useFindAndModify:false}, function(err){
    if(err){
        console.log('database is an error')
    } else {
        console.log('database is an active')
    }
})

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/',routes)
app.use(erroHandler)

module.exports = app