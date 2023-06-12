const express = require('express')
const AlunoController = require('./controllers/aluno.controller')
const router = express.Router()

router.get('/', async function (req, res) {
    res.status(200).send('Online')
})
router.post('/aluno', AlunoController.criar)
router.get('/alunos', AlunoController.listarTodos)
router.get('/alunos/nome/:nome', AlunoController.listarPorNome)

module.exports = router