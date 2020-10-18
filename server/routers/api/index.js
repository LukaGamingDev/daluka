const express = require('express')
const authAPI = require('./auth')

const API = express.Router()

API.use(express.json())
API.use('/auth', authAPI)

API.use((req, res) => {
    res.status(404).json({
        message: 'Not Found'
    })
})

module.exports = API
