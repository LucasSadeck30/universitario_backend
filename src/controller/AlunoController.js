
const CursoModel = require('../models/CursoModel.js');

const AlunoModel = require('../models/AlunoModel.js');


class AlunoController {


    static async listarAlunos(req, res) {

        try {

            // array vazio que vai ser utilizado para pegar os dados tratados daquele Aluno, que são: nome, curso, duracao
            const alunos = []

            // vai no banco de dados e puxa os dados de todos os alunos, trazendo também dados relacionados, no caso dados da tabela de Curso
            const lista_alunos = await AlunoModel.getAllAlunos();



            // foreach para pegar todos os alunos já com o relacionamento e passar para o array de dados, os dados que interessam de ser apresentados
            lista_alunos.forEach(aluno => {





                let novoAluno = {}

                novoAluno.nome = aluno.nome
                novoAluno.curso = aluno.Curso.nome
                novoAluno.duracao = aluno.Curso.duracao
                novoAluno.imagem = aluno.imagem
                novoAluno.id = aluno.id



                alunos.push(novoAluno)
            });







            //  console.log(listar_dados)

            res.json(alunos)


        } catch (error) {

            console.log("Erro ao listar os dados dos alunos:" + error);

        }



    }


    static async listarUmAluno(req, res) {


        try {

            const listar_dado = await AlunoModel.getAlunoById(req.params.id);


            console.log(`O valor que vem da lista é ${listar_dado}`);


            res.json(listar_dado)
        } catch (error) {

            console.log("Erro ao listar os dados dos alunos:" + error);

        }
    }


    static async formCriarAluno(req, res) {


        try {
            // a ideia é ir no banco, pegar todos os valores do curso e mandar eles para o formulário e colocar todos em checkbox, com os valores do 
            // nome dos cursos e os ids como value do checkbox
            const cursos = await CursoModel.getAllCUrso();

            console.log("Valor que no controller dos cursos foi: " + cursos);


            res.status(200).render('alunos/new', { cursos: cursos })
            console.log("chamou pagina de criação de aluno");

        } catch (error) {

            console.log("Erro ao chamar página de criaçaõ do curso:" + error);
        }

    }

    static async criarUmAluno(req, res) {



        try {


            console.log(`O valor que vem do da requisição é: ${req.file}`);



            await AlunoModel.createAluno(req.body, req.file);

            // res.status(200).render('alunos/index')


            console.log(`funcionou ${req.body}`);



        } catch (error) {

            console.log("Erro ao listar os dados dos alunos:" + error);

        }

    }

    static async deletarAluno(req, res) {

        try {

            await AlunoModel.deletarAluno(req.params.id);

            res.json({ "mensagem": "Curso deletado com sucesso!" })

        } catch (error) {

            console.log("Erro ao deletar o curso:" + error);

        }

    }

    static async atualizarAlunoController(req, res) {

        try {



            let atualizar_aluno = await AlunoModel.atualizarAluno(req.body, req.file)


            return atualizar_aluno

        } catch (error) {

            console.log("Erro ao atualizar o curso:" + error);

        }

    }




}

module.exports = AlunoController;