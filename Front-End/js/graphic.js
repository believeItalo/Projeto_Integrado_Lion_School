"use strict";

const graphicStudent = (dados) => {
  const contentAll = document.querySelector(".graphic");

  const contentProgress = document.querySelector("#graphic-student");

  for (let index = 0; index < dados.disciplinas.length; index++) {

    const contentBars = document.createElement('div')
    contentBars.classList.add('content-elements-graphic')

    const bar = document.createElement("progress");
    bar.classList.add("progress-bar");
    bar.value = dados.disciplinas[index].media;
    bar.max = "100";

    const span = document.createElement("span");  
    span.classList.add("span-bar");
    span.classList.add("rotate");
    span.innerHTML = dados.disciplinas[index].media;

    const spanDisciplines = document.createElement("span");
    spanDisciplines.classList.add("rotate");
    spanDisciplines.classList.add("span-bar");
    spanDisciplines.classList.add("color-blue");

     const textSplit = dados.disciplinas[index].nome.split(" ");
     if (textSplit.length == 2) {
      const textSlice = textSplit[0].slice(0,1).toUpperCase() + textSplit[1].slice(0,1).toUpperCase()
      spanDisciplines.innerHTML = textSlice
     }
     else if(textSplit.length == 3){
      const textSlice = textSplit[0].slice(0,1).toUpperCase() + textSplit[1].slice(0,1).toUpperCase() + textSplit[2].slice(0,1).toUpperCase()
      spanDisciplines.innerHTML = textSlice
     }
     else if(textSplit.length == 1){
      const textSlice = textSplit[0].slice(0,4).toUpperCase()
      spanDisciplines.innerHTML = textSlice
     }
     else if(textSplit.length == 4){
      const textSlice = textSplit[0].slice(0,1) + textSplit[1].slice(0,1).toUpperCase() + textSplit[2].slice(0,1).toUpperCase() + textSplit[3].slice(0,1).toUpperCase()
      spanDisciplines.innerHTML = textSlice
     }
    

    if (bar.value > 50) {
      bar.classList.add("progress-bar-blue");
      span.classList.add("color-blue");
     
    } else if (bar.value == 50) {
      bar.classList.add("progress-bar-yellow");
      span.classList.add("color-yellow");
  
    } else if (bar.value < 50) {
      bar.classList.add("progress-bar-red");
      span.classList.add("color-red");
    
    }

    contentBars.append(spanDisciplines, bar, span);
    contentProgress.append(contentBars)
  }

  
  contentAll.append(contentProgress);

  return contentAll;
};
const loadDiscipline = async () => {
  let localStore = localStorage.getItem("registration");
  const url = `https://api-lionschool.cyclic.app/v1/lion-school/alunos/${localStore}`;

  const response = await fetch(url);
  const data = await response.json();

  let displines = data.curso;

  console.log(displines);
  

  displines.map(graphicStudent);
};



loadDiscipline();
