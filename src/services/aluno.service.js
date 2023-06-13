const AlunoSchema = require('../schemas/aluno.schema')

module.exports = class AlunoService {
    static criar(aluno) {
        return new Promise(async function (resolve, reject) {
            try {
                const novoAluno = new AlunoSchema({
                    nome: aluno.nome,
                    dataNascimento: aluno.dataNascimento,
                    ra: aluno.ra,
                    email: aluno.email,
                    endereco: aluno.endereco,
                    curso: aluno.curso
                })

                await novoAluno
                    .save()
                    .then(result => resolve(result))
                    .catch(err => reject(err))
            } catch (err) {
                reject(err)
            }
        })
    }

    static editar(aluno) {
        return new Promise(async function (resolve, reject) {
            try {
                await AlunoSchema
                    .findOneAndUpdate({_id: aluno.id}, {
                        nome: aluno.nome,
                        dataNascimento: aluno.dataNascimento,
                        ra: aluno.ra,
                        email: aluno.email,
                        endereco: aluno.endereco,
                        curso: aluno.curso
                    })
                    .then(result => resolve(result))
                    .catch(err => reject(err))
            } catch (err) {
                reject(err)
            }
        })
    }

    static deletar(id) {
        return new Promise(async function (resolve, reject) {
            try {
                await AlunoSchema
                    .findOneAndDelete({_id: id})
                    .then(result => resolve(result))
                    .catch(err => reject(err))
            } catch (err) {
                reject(err)
            }
        })
    }

    static listar() {
        return new Promise(async function (resolve, reject) {
            try {
                await AlunoSchema
                    .find()
                    .then(result => resolve(result))
                    .catch(err => reject(err))
            } catch (err) {
                reject(err)
            }
        })
    }

    static buscarPorNome(nome) {
        return new Promise(async function (resolve, reject) {
            try {
                await AlunoSchema
                    .find({nome: nome})
                    .then(result => resolve(result))
                    .catch(err => reject(err))
            } catch (err) {
                reject(err)
            }
        })
    }

    static buscarPorCurso(curso) {
        return new Promise(async function (resolve, reject) {
            try {
                await AlunoSchema
                    .find({curso: curso})
                    .then(result => resolve(result))
                    .catch(err => reject(err))
            } catch (err) {
                reject(err)
            }
        })
    }
}