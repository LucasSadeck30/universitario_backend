const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());  // pode manter, mas o de cima já força





const methodOverride = require('method-override')

const path = require ('path');
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const cursoRoutes  = require('./src/routes/curso/curso.js')

const alunoRoutes = require('./src/routes/aluno/aluno.js');
//const indexRoutes = require('./src/routes/index.js');

app.use(express.json());

app.use(express.urlencoded({extended:true}));

app.use(methodOverride('_method',{ methods: ['POST', 'GET','PUT','DELETE'] }));

// aqui já define a rota com /cursos
app.use('/cursos',cursoRoutes);
app.use('/alunos',alunoRoutes);


app.use(express.static(path.join(__dirname,'public')));

app.set('views',path.join(__dirname,'src/views'))

//aqui é pra dizer pro express que o view engine é o ejs, porque por padrão ele não sabe e outro view engine tbm
app.set('view engine', 'ejs');


app.listen(3001,()=>{
    console.log("Servidor escutando na porta 3001s");
    
})