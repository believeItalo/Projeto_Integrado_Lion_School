'use strict'

import { alunos } from "../js/alunos.js"


const criarCard = (student) => {
    const card = document.createElement('li')
    if (student.status == "Cursando"){
        card.classList.add('card-studying')
    } else {
        card.classList.add('card-finalized')
    }

    const img = document.createElement('img')
    img.classList.add('image-student')
    img.src = student.foto

    const name = document.createElement('h3')
    name.textContent = student.nome


    card.append(img, name)

    return card
}

const carregarAlunos = () => {
    const container = document.getElementById('list-students')
    const cards = alunos.map(criarCard)

    container.replaceChildren(...cards)
}

carregarAlunos() 