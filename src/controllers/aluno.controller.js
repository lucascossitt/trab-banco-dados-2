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

    static editar(req, res) {
        try {
            AlunoService
                .editar(req.body)
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

    static deletar(req, res) {
        try {
            AlunoService
                .deletar(req.body.id)
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

    static listar(req, res) {
        try {
            AlunoService
                .listar()
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

    static buscarPorNome(req, res) {
        try {
            AlunoService
                .buscarPorNome(req.params.nome)
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

    static buscarPorCurso(req, res) {
        try {
            AlunoService
                .buscarPorCurso(req.params.curso)
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

    static buscarPorCidade(req, res) {
        try {
            AlunoService
                .buscarPorCidade(req.params.cidade)
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

    static buscarPorEmail(req, res) {
        try {
            AlunoService
                .buscarPorEmail(req.params.email)
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