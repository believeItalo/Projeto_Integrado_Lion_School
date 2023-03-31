'use strict'

export const student = async (numero) => {

    const url = `http://localhost:8080/v1/lion-school/alunos/${numero}`

    const response = await fetch(url)
    const data = await response.json()

    return JSON.parse(data)

}

student(20151001001)