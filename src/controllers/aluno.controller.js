const AlunoService = require('../services/aluno.service')

module.exports = class AlunoController {

    static criar(req, res) {
        try {
            AlunoService
                .criar(req.body)
                .then(result => res.status(200).send(result))
                .catch(err => {
                    console.error(err)
                    res.status(500).send()
                })
        } catch (err) {
            console.error(err)
            res.status(500).send()
        }
    }

    static listarTodos(req, res) {
        try {
            AlunoService
                .listarTodos()
                .then(result => res.status(200).send(result))
                .catch(err => {
                    console.error(err)
                    res.status(500).send()
                })
        } catch (err) {
            console.error(err)
            res.status(500).send()
        }
    }

    static listarPorNome(req, res) {
        try {
            AlunoService
                .listarPorNome(req.params.nome)
                .then(result => res.status(200).send(result))
                .catch(err => {
                    console.error(err)
                    res.status(500).send()
                })
        } catch (err) {
            console.error(err)
            res.status(500).send()
        }
    }
}