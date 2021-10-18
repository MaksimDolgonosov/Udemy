"use strict";

let numberOfFlms;

function start() {
    numberOfFlms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    while (numberOfFlms == "" || numberOfFlms < 0 || numberOfFlms == null || isNaN(numberOfFlms)) {
        numberOfFlms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

start();

const PersonalMovieDB = {
    count: numberOfFlms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFlms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt("Один из последних просмотренных фильмов", "");
        const b = prompt("На сколько оцените его?", "");

        if (a != null && b != null && a != "" && b != "" && a.length < 50) {
            PersonalMovieDB.movies[a] = b;
        } else {
            i--;
        }
    }
}
rememberMyFlms();

function detectPersonalLevel() {
    if (PersonalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (PersonalMovieDB.count >= 10 && PersonalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (PersonalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произола ошибка");
    }
}
detectPersonalLevel();

function showMyDB(hiden) {
    if (!hiden) {
        console.log(PersonalMovieDB);
    }

}
showMyDB(PersonalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i < 4; i++) {
        let genre = prompt(`Ваш любимый жанр под номером ${i}`);
        PersonalMovieDB.genres[i - 1] = genre;

    }
}

writeYourGenres();