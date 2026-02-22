const CursoModel = require('../models/CursoModel.js');

class CursoController{


    static async listarCursos(req,res){
    //console.log(req.body);

     try {
    const listar_dados = await CursoModel.getAllCUrso();
    //console.log(listar_dados);
    


 // res.status(200).render('cursos/index',{cursos:listar_dados})
 res.json(listar_dados)
        
    } catch (error) {

   // console.log("Erro ao listar os dados do Curso:"+error);
        
    }
         


    }





    static async listarUmCurso(req,res){
     
 
    
    try {

    const listar_dado =  await CursoModel.getCursoById(req.params.id);

    //console.log(req.params.id);
    

    res.json(listar_dado)
    } catch (error) {

   // console.log("Erro ao listar os dados dos alunos:"+error);
        
        }
    }


    static async criarUmCurso(req,res){


    try {

 
     
    await CursoModel.createCurso(req.body,req.file);
     
    
        
    } catch (error) {

    console.log("Erro ao listar os dados dos alunos:"+error);
        
    }

    }

    static async deletarCurso(req,res){
      
    try {

    await CursoModel.deletarCurso(req.params.id);

   res.json({"mensagem":"Curso deletado com sucesso!"})
        
    } catch (error) {

    console.log("Erro ao deletar o curso:"+error);
        
    }
        
}

     static async atualizarCurso(req,res){

 
      try {

   


let atualizar =await CursoModel.atualizarCurso(req.body,req.file)

return res.json(atualizar)
        
    }catch(err){
  console.log(err);
  
     }


     }

  }
     



module.exports = CursoController;