const express = require('express')
const path = require('path')

const app = express()

const BUILD_FOLDER = path.join(__dirname, process.env.BUILD_FOLDER)

app.use(express.static(BUILD_FOLDER))

app.get('*', (req, res) => {
    res.sendFile(path.join(BUILD_FOLDER, "/index.js"))
})

app.listen(process.env.PORT, () => {
    console.log(`[express]: App listening on Port ${process.env.PORT}`)
})
