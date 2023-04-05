"use strict";

const graphicStudent = (dados) => {
  const contentAll = document.querySelector(".graphic");

  const contentBars = document.querySelector("#graphic-student");

  const contentSpanValue = document.querySelector(".materiasSpan");

  const contentSpanDiscipline = document.querySelector(".spans_bar");

  for (let index = 0; index < dados.disciplinas.length; index++) {
    console.log("alo");

    const barra = document.createElement("progress");
    barra.classList.add("progress_bar");
    barra.value = dados.disciplinas[index].media;
    barra.max = "100";

    const span = document.createElement("span");
    span.classList.add("spans_bar");
    span.innerHTML = dados.disciplinas[index].media;

    const spanDisciplines = document.createElement("span");
    // spanDisciplines.classList.add("bar_value");
    spanDisciplines.innerHTML = dados.disciplinas[index].nome;

    if (barra.value > 50) {
      barra.classList.add("progress_barBlue");
      span.classList.add("color-blue");
      spanDisciplines.classList.add("color-blue");
    } else if (barra.value == 50) {
      barra.classList.add("progress_barYellow");
      span.classList.add("color-yellow");
      spanDisciplines.classList.add("color-yellow");
    } else if (barra.value < 50) {
      barra.classList.add("progress_barRed");
      span.classList.add("color-red");
      spanDisciplines.classList.add("color-red");
    }

    contentBars.append(barra);
    contentSpanValue.append(span);
    contentSpanDiscipline.append(spanDisciplines);
  }

  contentAll.append(contentBars, contentSpanValue, contentSpanDiscipline);

  return contentAll;
};
const loadDiscipline = async () => {
  let localStore = localStorage.getItem("registration");
  const url = `http://localhost:8080/v1/lion-school/alunos/${localStore}`;

  const response = await fetch(url);
  const data = await response.json();

  let displines = data.curso;

  console.log(displines);

  displines.map(graphicStudent);
};

loadDiscipline();
