'use strict'


const criarCard = (curso) => {

    const a = document.createElement('a')
    a.href = '../html/class.html'

    const card = document.createElement('button')
    card.classList.add('class')
    card.id = curso.sigla

    card.onclick = () => {
        localStorage.setItem('acronym', card.id)
    }
    const icon = document.createElement('img')
    icon.classList.add('image-icon')
    icon.src = curso.icone

    const name = document.createElement('h2')
    name.classList.add('name-class')
    name.textContent = curso.sigla

    card.append(icon, name)
    a.append(card)

    return a
}

const carregarCursos = async () => {
    const url = `http://localhost:8080/v1/lion-school/cursos`

    const response = await fetch(url)
    const data = await response.json()

    let courses = data.cursos


    const container = document.getElementById('buttons-options')
    const cards = courses.map(criarCard)

    container.replaceChildren(...cards)


}


carregarCursos()











// const getIndexClass = function (event) {
//     localStorage.setItem(
//         'acronym', 
//         url.acronym[event.currentTarget.dataset.index]
//         )

//     localStorage.setItem(
//         "courseName",
//         url.name[event.currentTarget.dataset.index]
//     )
// }