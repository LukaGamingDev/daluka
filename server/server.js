const express = require('express')
const path = require('path')
const API = require('./routers/api')

const db = require('./db')
db.once('open', () => console.log('[mongoose]: Connection open'))
db.once('close', () => console.log('[moongose]: Connection Closed'))

const app = express()

const BUILD_FOLDER = path.join(__dirname, process.env.BUILD_FOLDER)

app.use('/api', API)

app.use(express.static(BUILD_FOLDER))
app.get('*', (req, res) => {
    res.sendFile(path.join(BUILD_FOLDER, "/index.html"))
})

app.listen(process.env.PORT, () => {
    console.log(`[express]: App listening on Port ${process.env.PORT}`)
})