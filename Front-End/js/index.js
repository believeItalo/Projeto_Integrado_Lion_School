"use strict";

const out = document.querySelector('#out')

out.addEventListener('click', () => {
  closeApplication()
})

function closeApplication() {
  const new_window =
    open(location, '_self');
  new_window.close();
  return false;
}

const createButtonCourse = (curso) => {
  window.open
  const a = document.createElement("a");
  a.href = "./html/class.html";

  const card = document.createElement("button");
  card.classList.add("class");
  card.id = curso.sigla;

  card.onclick = () => {
    localStorage.setItem("acronym", card.id);
    localStorage.setItem("nameCourse", curso.nome);
  };
  const icon = document.createElement("img");
  icon.classList.add("image-icon");
  icon.src = curso.icone;
  icon.alt = "Icon about course";

  const name = document.createElement("h2");
  name.classList.add("name-class");
  name.textContent = curso.sigla;

  card.append(icon, name);
  a.append(card);

  return a;
};

const loadCourses = async () => {
  const url = `https://api-lionschool.cyclic.app/v1/lion-school/cursos`;

  const response = await fetch(url);
  const data = await response.json();

  let courses = data.cursos;

  const container = document.getElementById("buttons-options");
  const cards = courses.map(createButtonCourse);

  container.replaceChildren(...cards);
};

loadCourses();


