"use strict";

const PersonalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        this.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        while (this.count == "" || this.count < 0 || this.count == null || isNaN(this.count)) {
            this.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    },

    rememberMyFlms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt("Один из последних просмотренных фильмов", "");
            const b = prompt("На сколько оцените его?", "");

            if (a != null && b != null && a != "" && b != "" && a.length < 50) {
                this.movies[a] = b;
            } else {
                i--;
            }
        }
    },
    detectPersonalLevel: function () {
        if (this.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (this.count >= 10 && PersonalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (this.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произола ошибка");
        }
    },
    showMyDB: function () {
        if (!this.privat) {
            console.log(PersonalMovieDB);
        }

    },
    writeYourGenres: function () {
        for (let i = 1; i < 4; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);
            this.genres[i - 1] = genre;

        }
    }
};


PersonalMovieDB.rememberMyFlms();
console.log(PersonalMovieDB);









