'use strict'

<<<<<<< HEAD
=======

>>>>>>> ee1191ae03aa51768b917ee65a6223f8e356d8bf
const criarCard = (curso) => {
    

    const card = document.createElement('button')
    card.classList.add('class')

    const icon = document.createElement('img')
    // icon.src =  curso.icone

    const name = document.createElement('h2')
    name.classList.add('name-class')
    name.textContent = curso.sigla

    card.append(icon, name)

    return card
}

const carregarCursos = async () => {
    const url = `http://localhost:8080/v1/lion-school/cursos`

    const response = await fetch(url)
    const data = await response.json()

    let teste = data.cursos


    const container = document.getElementById('buttons-options')
    const cards =  teste.map(criarCard)

    console.log(teste);


    container.replaceChildren(...cards)
}

carregarCursos() 
