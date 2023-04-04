"use strict";

const loadStudent = async () => {
  let localStore = localStorage.getItem("registration");
  const url = `http://localhost:8080/v1/lion-school/alunos/${localStore}`;

  const response = await fetch(url);
  const data = await response.json();

  return data;
};

const criarCard = async () => {
  const studentData = await loadStudent();

  const article = document.querySelector("article");

  const img = document.createElement("img");
  img.classList.add("image-student-select");
  img.src = studentData.foto;

  const name = document.createElement("h3");
  name.textContent = studentData.nome;

  article.append(img, name);
};

criarCard();
