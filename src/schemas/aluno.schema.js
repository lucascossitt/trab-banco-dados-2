const mongoose = require('mongoose')

const alunoSchema = new mongoose.Schema({
    nome: {
        type: String
    },
    dataNascimento: {
        type: Date
    },
    ra: {
        type: String
    },
    email: {
        type: String
    },
    endereco: {
        type: String
    },
    curso: {
        type: String
    }
})

module.exports = mongoose.model('Alunos', alunoSchema)