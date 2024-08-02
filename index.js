require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/login', (req, res) => {
    res.send("<div><h1>Login</h1><p>Please Login The You Can Take Your Next Step</p></div>")
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})