const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes')

const app = express()
const port = 8000

app.use(bodyParser.json())
app.use(routes)

app.listen(port, '0.0.0.0', () => {
    console.log('Iniciado na porta, port')
})