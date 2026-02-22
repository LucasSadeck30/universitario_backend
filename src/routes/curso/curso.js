const express = require('express');

const upload = require('../../config/upload.js')

const router = express.Router();

const CursoController = require('../../../src/controller/CursoController.js');



//Rotas para curso
router.post('/',upload.single('imagem'),CursoController.criarUmCurso)     
router.get('/',CursoController.listarCursos);




// rota de deleção 
router.delete('/:id',CursoController.deletarCurso);
// rota de atualização
router.put('/:id',upload.single('imagem'),CursoController.atualizarCurso)

router.get('/:id',CursoController.listarUmCurso);

// // criacao da rota get de id por alunos e curso
// router.get('/listarAlunos/:id',CursoController.listarAlunosMatriculadosCurso)






module.exports = router;