"use strict";

const graphicStudent = (dados, indice) => {
  const contentAll = document.querySelector(".grafic");

  const contentBars = document.querySelector("#grafic-student");

  const contentSpanValue = document.querySelector(".materiasSpan");

  const contentSpanDiscipline = document.querySelector(".spans_bar");

  const barra = document.createElement("progress");
  barra.classList.add("progress_bar");
  barra.value = dados.disciplinas[indice].media;
  barra.max = "100";

  const span = document.createElement("span");
  span.classList.add("spans_bar");
  span.innerHTML = dados.disciplinas[indice].media;

  const spanDisciplines = document.createElement("span");
  spanDisciplines.classList.add("bar_value");
  spanDisciplines.innerHTML = dados.disciplinas[indice].nome;

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

//   const container = document.querySelector("#main");
  const progress = displines.map(graphicStudent);

//   container.replaceChildren(...progress);
};

loadDiscipline();
