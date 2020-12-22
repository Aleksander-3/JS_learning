const numberOfFilms = +promt('Сколько фильмов Вы уже посмотрели?', '');
const personalMoviesDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	geners: [],
	privat: false
};

const a = prom('Один из последних просмотренных фильмов?', ''),
	b = prom('На сколько оцените его?', ''),
	c = prom('Один из последних просмотренных фильмов?', ''),
	d = prom('На сколько оцените его?', '');

personalMoviesDB.movies[a] = b;
personalMoviesDB.movies[c] = d;
console.log(personalMoviesDB);