/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

//"use strict";
document.addEventListener("DOMContentLoaded", ()=> {
const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

//1) Удалить все рекламные блоки со страницы (правая часть сайта)

//document.querySelector(".promo__adv").remove();

let fordel=document.querySelector(".promo__adv").getElementsByTagName("*");
 for (let i = 3; i > 0; i--) {
    fordel[i].remove();
 }


 //2) Изменить жанр фильма, поменять "комедия" на "драма"
document.querySelector(".promo__genre").textContent="ДРАМА";

//3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
//Реализовать только при помощи JS
document.querySelector(".promo__bg").style.backgroundImage="url(img/bg.jpg)";

//4) Список фильмов на странице сформировать на основании данных из этого JS файла.
//Отсортировать их по алфавиту 
function addFilmToForm(){
movieDB.movies.sort();
let movieList = document.querySelector(".promo__interactive-list");
movieList.innerHTML="";
movieDB.movies.forEach((film,i)=>{
movieList.innerHTML+= `
<li class="promo__interactive-item">${i+1}. ${film}
<div class="delete"></div>
</li>`;
});
 let list = document.querySelectorAll(".promo__interactive-item");
list.forEach(element => {
 element.style.cssText="text-transform: capitalize";
});
}

addFilmToForm();
//Раздел 33. Практика. События на странице.

let addForm=document.querySelector(".add");

addForm.addEventListener("submit",(event)=>{
event.preventDefault();
});

//Добавление фильма в форму
document.querySelector(".yes").nextElementSibling.onclick=addFilm;

function addFilm () {
  let a =document.querySelector(".adding__input").value;
  let b =a.slice(0,21);
  if (a==""){
    //alert("Введите фильм");
      }else if (a.length<22) {
    movieDB.movies.push(a);
  } else {      
    (movieDB.movies.push(b+"..."));
  }
  if (document.querySelector(".yes").previousElementSibling.checked) {
    console.log(`Добавляем любимый фильм ${b}...`);
}
   addFilmToForm();
   document.querySelector(".adding__input").value="";
   console.log(movieDB.movies);
}

//Удаление фильма при нажатии на корзину
let delFilm=document.querySelectorAll(".delete");

delFilm.forEach((element, i) => {
    element.addEventListener("click",()=>{
        element.parentElement.remove();
        movieDB.movies.slice(i,1);
        
    });
});

// function remFilm(e){
//     e.target.parentElement.remove();
//     movieDB.movies[i].slice();
//     console.log(movieDB.movies);
// }
console.log(movieDB.movies);
});
