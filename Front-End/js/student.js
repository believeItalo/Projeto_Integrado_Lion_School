'use strict'



const loadStudent = async (numero) => {
    const url = `http://localhost:8080/v1/lion-school/alunos/${numero}`

    const response = await fetch(url)
    const data = await response.json()
    // console.log(data);
    

    return data
    
}


const criarCard = async ()  => {
    const studentData = await loadStudent(20151001001);

    console.log(studentData);
    

    const teste = document.querySelector('article')

    const img = document.createElement('img')
    img.classList.add('image-student')
    img.src = studentData.foto

    const name = document.createElement('h3')
    name.textContent = studentData.nome

    teste.append(img, name)

    return matricula

}

criarCard()