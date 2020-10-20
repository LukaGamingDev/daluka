const express = require('express')
const User = require('../../db/User')

const authAPI = express.Router()

authAPI.post('/login', (req, res) => {
    res.json(req.body)
})

authAPI.post('/signup', async (req, res) => {
    try {
        const user = new User({
            email: req.body.email,
            password: req.body.password
        })

        const doc = await user.save()
        res.status(201).json(doc)
    } catch(e) {
        res.status(500).json({
            message: e.message
        })
    }
})

module.exports = authAPI