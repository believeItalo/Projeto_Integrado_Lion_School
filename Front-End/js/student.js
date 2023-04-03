'use strict'

const url = `http://localhost:8080/v1/lion-school/alunos`

const response = await fetch(url)
const data = await response.json()
let teste = data.alunos

console.log();


const barraProgresso = () => {
    let barra = document.querySelectorAll('.progress_bar')
    let bar_value = document.querySelectorAll('.bar_value')
    let bar_grades = document.querySelectorAll('.materiasSpan')
    barra.forEach(function (dados){
        if (dados.value > 50) {
            dados.classList.add('progress_barBlue')
        }
        else if (dados.value == 50){
            dados.classList.add('progress_barYellow')
        }
        else if(dados.value < 50){
            dados.classList.add('progress_barRed')
        }


    })
    
 
}

barraProgresso()