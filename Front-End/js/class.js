'use strict'

const criarCard = (student) => {
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

    card.append(img, name)

    return card
}

const carregarAlunos = async () => {
    const url = `http://localhost:8080/v1/lion-school/alunos`

    const response = await fetch(url)
    const data = await response.json()
    let teste = data.alunos

    const container = document.getElementById('list-students')
    const cards = teste.map(criarCard)

    container.replaceChildren(...cards)
}

carregarAlunos()

const clearListStudents = () => {
    const cards = document.getElementById('card')
    cards.forEach((card) => card.remove())
}

const statusSelect = document.getElementById(`select`)
statusSelect.addEventListener(`change`, (el) => {
    const status = statusSelect.value
    const studentsFilter = await getStudentsByFilter(courseInitial, status.toLowerCase())

    if (status == `status`) {
        location.reload()
    }
    clearListStudents()
    criarCard(studentsFilter)
})