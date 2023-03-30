/* 
      Projeto: Construir API para a escola 'Lion School'
      Autor: Ítalo Reis Rosa da Silva
      Versão: 1.0
      Data Início: 27/03/2023
  */
const express = require('express')

const cors = require('cors')

const bodyParser = require('body-parser')

const app = express()

const cursosLionSchool = require('./APIs_Lion_School/cursos')
const alunosLionSchool = require('./APIs_Lion_School/alunos')
app.use((request, response, next) => {

    response.header('Access-Control-Allow-Origin', '*')

    response.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT, OPTIONS')

    app.use(cors())

    next()
})

app.get('/v1/lion-school/cursos', cors(), async function (request, response, next){

    let listaCursos = cursosLionSchool.getCursos()
  
    response.json(listaCursos)
    response.status(200)

})

app.get('/v1/lion-school/alunos', cors(), async function(request,response,next){

    let listaAlunos = alunosLionSchool.getAlunos()

    response.json(listaAlunos)
    response.status(200)
})

app.get('/v1/lion-school/alunos/:matricula',cors(), async function(request,response,next){

    let numeroMatricula = request.params.matricula

    let getAlunosPelaMAtricula = alunosLionSchool.getAlunoPelaMatricula(numeroMatricula)
    response.json(getAlunosPelaMAtricula)
    response.status(200)
})

app.get('/v1/lion-school/alunos/status/:stAlunos', cors(), async function(request,response,next){
    let statusAluno = request.params.stAlunos
    let getAlunoStatus = alunosLionSchool.getAlunosStatus(statusAluno)

    if (getAlunoStatus) {
        response.json(getAlunoStatus)
        response.status(200)
    }
    else{
        response.status(400)
    }
   
})
app.listen(8080, function () {
    console.log('Servidor aguardando requisições na porta 8080');
})