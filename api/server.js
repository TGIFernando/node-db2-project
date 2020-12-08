const express = require('express')
const cors = require('cors')
const carRouter = require('./cars/car-router')

const server = express()

server.use(cors)
server.use(express.json())
server.use('/api/cars', carRouter)

module.exports = server