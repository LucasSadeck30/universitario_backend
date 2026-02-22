const express = require('express');

const router = express.Router();

// oassar a conexão com o banco de dados
const prisma = require('../../../src/database/database.js');

const AlunoController = require('../../controller/AlunoController.js');

const upload = require('../../config/upload.js')

// criação do CRUD

// rota do formulário de criacao do aluno
router.get('/new',AlunoController.formCriarAluno)

// rota de criacao do aluno 
router.post('/',upload.single('imagem'),AlunoController.criarUmAluno)



router.get('/',AlunoController.listarAlunos)



router.get('/:id',AlunoController.listarUmAluno)





// rota de atualização
router.put('/:id',upload.single('imagem'),AlunoController.atualizarAlunoController)






router.delete('/:id',AlunoController.deletarAluno)




module.exports = router;