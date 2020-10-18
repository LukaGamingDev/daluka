const express = require('express')

const authAPI = express.Router()

authAPI.post('/login', (req, res) => {
    res.json(req.body)
})

module.exports = authAPI