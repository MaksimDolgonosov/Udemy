"use strict";
const numberOfFlms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const PersonalMovieDB = {
    count: numberOfFlms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt("Один из последних просмотренных фильмов", "");
    const b = prompt("На сколько оцените его?", "");

    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
        PersonalMovieDB.movies[a] = b;
        console.log("done");

    } else {
        console.log("error");
        i--;
    }



}

if (PersonalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (PersonalMovieDB.count >= 10 && PersonalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (PersonalMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Произола ошибка")
}



console.log(PersonalMovieDB);