const AlunoModel = require('../schemas/aluno.schema')

module.exports = class AlunoService {
    static criar(aluno) {
        return new Promise(async function (resolve, reject) {
            try {
                const result = AlunoModel.create(aluno)
                resolve(result)
            } catch (err) {
                reject(err)
            }
        })
    }

    static editar(aluno) {
        return new Promise(async function (resolve, reject) {
            try {
                const result = await AlunoModel.findByIdAndUpdate(aluno.id, aluno)
                resolve(result)
            } catch (err) {
                reject(err)
            }
        })
    }

    static deletar(id) {
        return new Promise(async function (resolve, reject) {
            try {
                const result = await AlunoModel.findByIdAndDelete(id)
                resolve(result)
            } catch (err) {
                reject(err)
            }
        })
    }

    static listar() {
        return new Promise(async function (resolve, reject) {
            try {
                const result = await AlunoModel.find()
                resolve(result)
            } catch (err) {
                reject(err)
            }
        })
    }

    static buscarPorNome(nome) {
        return new Promise(async function (resolve, reject) {
            try {
                const result = await AlunoModel.find({nome: {$regex: nome, $options: 'i'}})
                resolve(result)
            } catch (err) {
                reject(err)
            }
        })
    }

    static buscarPorCurso(curso) {
        return new Promise(async function (resolve, reject) {
            try {
                const result = await AlunoModel.find({curso: {$regex: curso, $options: 'i'}})
                resolve(result)
            } catch (err) {
                reject(err)
            }
        })
    }

    static buscarPorCidade(cidade) {
        return new Promise(async function (resolve, reject) {
            try {
                const result = await AlunoModel.find({cidade: cidade})
                resolve(result)
            } catch (err) {
                reject(err)
            }
        })
    }

    static buscarPorEmail(email) {
        return new Promise(async function (resolve, reject) {
            try {
                const result = await AlunoModel.find({email: email})
                resolve(result)
            } catch (err) {
                reject(err)
            }
        })
    }
}