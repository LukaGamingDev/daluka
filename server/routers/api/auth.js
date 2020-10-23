const express = require('express')
const User = require('../../db/User')
const bcrypt = require('bcrypt')

const authAPI = express.Router()

function auth()

authAPI.post('/login', async (req, res) => {
    try {

    } catch(e) {
        res.status(500).json({
            message: e.message
        })
    }
})

authAPI.post('/signup', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)

        const user = new User({
            email: req.body.email,
            password: hashedPassword
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