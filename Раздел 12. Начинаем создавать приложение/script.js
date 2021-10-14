const numberOfFlms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const PersonalMovieDB = {
    count: numberOfFlms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("Один из последних просмотренных фильмов", ""),
    b = prompt("На сколько оцените его?", ""),
    c = prompt("Один из последних просмотренных фильмов", ""),
    d = prompt("На сколько оцените его?", "");

PersonalMovieDB.movies[a] = b;
PersonalMovieDB.movies[c] = d;

console.log(PersonalMovieDB);