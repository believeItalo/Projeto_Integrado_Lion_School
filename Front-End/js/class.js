"use strict";

const nameCourse = async function () {
  let title = localStorage.getItem("nameCourse");
  const regexpNumber = /[0-9]/g;
  title = title.replace(regexpNumber, "").replace("-", "").trim();
  let titleCourse = document.querySelector(".title-class");
  titleCourse.innerHTML = title;
};

const createCard = (student) => {
  nameCourse();

  const a = document.createElement("a");
  a.href = "student.html";

  const card = document.createElement("li");
  card.classList.add("card");
  card.id = student.matricula;
  card.onclick = () => {
    localStorage.setItem("registration", card.id);
  };

  if (student.status == "Cursando") {
    card.classList.add("card-studying");
  } else {
    card.classList.add("card-finalized");
  }

  const img = document.createElement("img");
  img.classList.add("image-student");
  img.src = student.foto;
  img.alt = "Student photo";

  const name = document.createElement("h2");
  name.textContent = student.nome;

  a.append(card);
  card.append(img, name);

  const select = document.getElementById('select-status')

  select.addEventListener('change', function () {
    let value = select.value

    console.log(value)

    if (value == 'status') {
        card.style.display = 'flex'

    } else if (value != student.status) {
        card.style.display = 'none'
        
    } else if (value == student.status) {
        card.style.display = 'flex'      
    }
    
    
})

  return a;
};

export const loadStudents = async () => {
  let localStore = localStorage.getItem("acronym");
  const url = `https://api-lionschool.cyclic.app/v1/lion-school/alunos/cursos/${localStore}`;

  const response = await fetch(url);
  const data = await response.json();

  let list = data.curso;

  const container = document.getElementById("list-students");
  const cards = list.map(createCard);

  container.replaceChildren(...cards);
};

loadStudents();




  


// const clearCards = () => {
//   const cards = document.querySelectorAll(`.student`)
//   cards.forEach((card) => card.remove())
// }

// const statusSelect = document.getElementById(`select`)
// statusSelect.addEventListener(`change`, async (el) => {
//   const status = statusSelect.value
//   const studentsFilter = await getStudentsByFilter(courseInitial, status.toLowerCase())

//   if (status == `status`) {
//       location.reload()
//   }
//   clearCards()
//   createCardStudent(studentsFilter)
// })


  




