'use strict'

const criarCard = (matricula) => {
    const teste = document.querySelector('article')

    const img = document.createElement('img')
    img.classList.add('image-student')
    img.src = matricula.foto

    const name = document.createElement('h3')
    name.textContent = matricula.nome

    teste.append(img, name)

    return matricula

    
}

const carregarCursos = async (numero) => {
    const url = `http://localhost:8080/v1/lion-school/alunos/${numero}`

    const response = await fetch(url)
    const data = await response.json()

    const container = document.getElementById('main')
   
    const card = data.map(criarCard)

    console.log(data);


    container.replaceChildren(...card)
}

carregarCursos(20151001001) 