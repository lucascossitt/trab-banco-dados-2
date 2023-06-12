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

    static listarTodos() {
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

    static listarPorNome(nome) {
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
}