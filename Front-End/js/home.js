'use strict'

import { cursos } from "../js/cursos.js"


const criarCard = (curso) => {
    const card = document.createElement('button')
    card.classList.add('class')

    const icon = document.createElement('img')
    // icon.src = curso.icone

    const name = document.createElement('h2')
    name.classList.add('name-class')
    name.textContent = curso.sigla

    card.append(icon, name)

    return card
}

const carregarCursos = () => {
    const container = document.getElementById('buttons-options')
    const cards = cursos.map(criarCard)

    container.replaceChildren(...cards)
}

carregarCursos() 