const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const routes = require('./routes')

async function start() {
    const app = express()
    const port = 8000

    app.use(bodyParser.json())
    app.use(routes)
    app.listen(port, '0.0.0.0', () => {
        console.log('Iniciado na porta', port)
    })

    try {
        await mongoose.connect('mongodb://172.17.0.3:27017/alunos')
        console.log('Conectado ao banco de dados')
    } catch (err) {
        console.error('Falha ao conectar ao banco de dados', err)
    }
}

start()