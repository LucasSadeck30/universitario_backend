
const { log } = require('node:console');
const prisma = require('../../src/database/database.js');



class CursoModel{


static async getAllCUrso(){

const curso = await prisma.Curso.findMany();
    

  return curso;

}


static async createCurso(dados,arquivo){

// console.log(`O valor que vem para a model de createCurso é ${arquivo.filename}`);
   await prisma.Curso.create(
    {
    data:{
        nome: dados.nome,
        duracao: parseInt(dados.duracao),
        created_at: new Date(),
        descricao: dados.descricao,
        imagem: `/uploads/${arquivo.filename}`

    }
    })

}



// deletar o curso 
static async getAlunosCursoById(id){


    try {
       
      const curso = await prisma.Curso.findUnique({

        where:{
            id: parseInt(id)
        },
         include: {
       Aluno: true
    }
    })
  
    


    

      return curso

    } catch (error) {
        
        return "Erro ao deletar o curso: "+error
    } 
 }



// deletar o curso 
static async getCursoById(id){


    try {
       console.log(`Testando valor do curso pelo id ${id}`);
       
      const curso = await prisma.Curso.findUnique({

        where:{
            id: parseInt(id)
        }
    })

      return curso

    } catch (error) {
        
        return "Erro ao deletar o curso: "+error
    } 
 }






// deletar o curso 
static async deletarCurso(id){


    try {
       
        await prisma.Curso.delete({

        where:{
            id: parseInt(id)
        }
    })

      return "Curso deletado com sucesso"

    } catch (error) {
        
        return "Erro ao deletar o curso: "+error
    } 
 }



// Atualizar o curso 
static async atualizarCurso(dados,arquivo){


       const dadosAtualizar = {
        nome: dados.nome,
        duracao: parseInt(dados.duracao),
        descricao: dados.descricao,
        id: parseInt(dados.id)
     }

// fazer validação caso o usuário tenha passado uma nova imagem
if(arquivo){
    dadosAtualizar.imagem = `/uploads/${arquivo.filename}`
}


   await prisma.curso.update({
     where: {
        id: parseInt(dadosAtualizar.id)
     },
     data: dadosAtualizar
   })

   return "Curso Atualizado com sucesso"
        
    } catch (error) {

    console.log("Erro ao atualizar o curso:"+error);
        
    }




}

module.exports = CursoModel;