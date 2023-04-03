'use strict'

const criarCard = (student) => {
    const a = document.createElement('a')
    a.href = '../html/student.html'

    const card = document.createElement('li')
    card.classList.add('card')
    card.id = 'card'
    if (student.status == "Cursando") {
        card.classList.add('card-studying')
    } else {
        card.classList.add('card-finalized')
    }

    const img = document.createElement('img')
    img.classList.add('image-student')
    img.src = student.foto

    const name = document.createElement('h3')
    name.textContent = student.nome

    a.append(card)
    card.append(img, name)

    return a
}

export const carregarAlunos = async () => {
    let localStore = localStorage.getItem('acronym')
    const url = `http://localhost:8080/v1/lion-school/alunos/cursos/${localStore}`

    const response = await fetch(url)
    const data = await response.json()
    let list = data.curso

    const container = document.getElementById('list-students')
    const cards = list.map(criarCard)

    container.replaceChildren(...cards)
}

carregarAlunos()


