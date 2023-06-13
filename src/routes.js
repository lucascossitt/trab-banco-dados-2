const express = require('express')
const AlunoController = require('./controllers/aluno.controller')
const router = express.Router()

router.get('/', async function (req, res) {
    res.status(200).send('Online')
})
router.post('/aluno', AlunoController.criar)
router.put('/aluno', AlunoController.editar)
router.delete('/aluno', AlunoController.deletar)
router.get('/alunos', AlunoController.listar)
router.get('/alunos/nome/:nome', AlunoController.buscarPorNome)
router.get('/alunos/curso/:curso', AlunoController.buscarPorCurso)

module.exports = router