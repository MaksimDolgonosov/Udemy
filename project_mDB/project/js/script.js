/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

//"use strict";
document.addEventListener("DOMContentLoaded", ()=>{
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
document.querySelector(".promo__genre").innerHTML="ДРАММА";

//3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
//Реализовать только при помощи JS
document.querySelector(".promo__bg").style.backgroundImage="url(img/bg.jpg)";

//4) Список фильмов на странице сформировать на основании данных из этого JS файла.
//Отсортировать их по алфавиту 

movieDB.movies.sort();
let list = document.querySelectorAll(".promo__interactive-item");
list.forEach(element => {
    element.style.cssText="text-transform: none";
});
for (let i = 0; i < movieDB.movies.length; i++) {
    list[i].innerHTML=`${i+1}. `+movieDB.movies[i]+`<div class="delete"></div>`;
}



//Раздел 33. Практика. События на странице.

// let addForm = document.querySelector('form.add');

// addForm.addEventListener("submit", (event)=>{
// event.preventDefault();
// });


let addForm=document.querySelector('form.add');
addForm.submit=toStopReload;
function toStopReload(event) {
    event.preventDefault();
}


document.querySelector(".yes").nextElementSibling.onclick=addYourFilm;
function addYourFilm(){
console.log(document.querySelector(".adding__input").value);
}


});