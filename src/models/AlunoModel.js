
const prisma = require('../../src/database/database.js');


class AlunoModel{


static async getAllAlunos(){

 const alunos= await prisma.Aluno.findMany(
 {
    include: {
        Curso: true
    }
 })
    

  return alunos;

}






static async createAluno(dados,arquivo){

   // console.log("O valor dos dados que chegam na model são: "+dados,arquivo);
    


   await prisma.Aluno.create(
    {
    data:{
        nome: dados.nome,
        cursoId: parseInt(dados.cursoId),
        created_at: new Date(),
        imagem: `/uploads/${arquivo.filename}`,
        senha: dados.senha,
        email: dados.email  
    }
    }
        
      )


}




// deletar o curso 
static async getAlunoById(id){

       
      const aluno = await prisma.Aluno.findUnique(
            {      
              where: {
            id: parseInt(id)
        },
    include: {
       Curso: true
    }
 
  })


  

      return aluno

    
 }






// deletar o curso 
static async deletarAluno(id){


    try {
       
        await prisma.Aluno.delete({

        where:{
            id: parseInt(id)
        }
    })

      return "Aluno deletado com sucesso"

    } catch (error) {
        
        return "Erro ao deletar o aluno: "+error
    } 
 }



// Atualizar o curso 
static async atualizarAluno(dados,arquivo){

    try {  
        
        console.log('O valor que vem da requisição de strings é: ',dados)
        console.log('O valor que vem da requisição de arquivo é: ',arquivo)  

      const dadosAtualizar = {
        nome: dados.nome,
        senha: dados.senha,
        email: dados.email,
        cursoId: parseInt(dados.cursoId),
      }

// fazer validação caso o usuário tenha passado uma nova imagem
if(arquivo){
    dadosAtualizar.imagem = `/uploads/${arquivo.filename}`
}


   await prisma.aluno.update({
     where: {
        id: parseInt(dados.id)
     },
     data: dadosAtualizar
   })

   return "Aluno atualizado com sucesso!"


        
    } catch (error) {

        console.log(`O erro que deu ao atualizar um aluno foi ${error}`);
        
        
    }

}





}

module.exports = AlunoModel;