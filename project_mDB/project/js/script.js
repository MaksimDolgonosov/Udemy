/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

//"use strict";

const movieDB = {
    movies: [
        "Логанннннн",
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
document.getElementsByClassName("promo__genre")[0].innerHTML="ДРАММА";

//3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
//Реализовать только при помощи JS
document.getElementsByClassName("promo__bg")[0].style.backgroundImage="url(img/bg.jpg)";

//4) Список фильмов на странице сформировать на основании данных из этого JS файла.
//Отсортировать их по алфавиту 
let list = document.querySelectorAll(".promo__interactive-item");
console.log(list[0].innerHTML);

list[0].innerHTML=movieDB.movies[0];