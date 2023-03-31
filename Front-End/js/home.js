'use strict'

import { carregarAlunos } from './class.js'

let i = 0

const criarCard = (curso) => {

    const card = document.createElement('button')
    card.classList.add('class')
    card.id = curso.sigla


    card.onclick = async () => await carregarAlgumaCoisa(card.id)


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
    const cards = teste.map(criarCard)


    console.log(carregarAlunos('ds'));
    container.replaceChildren(...cards)



}


export var carregarAlgumaCoisa = async (id) => {
    carregarAlunos(id)
    window.location.href = '../html/class.html'
}

carregarCursos()










// const button = document.getElementsByClassName('.class');

// const getClass = async ({ target }) => {
//     const classSelect = await (target.id)
//     preencherDados(classSelect)
//     console.log('oii')
// }

// button.addEventListener('click', getClass);