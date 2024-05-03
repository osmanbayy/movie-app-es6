class LStorage {
    static addMovieToStorage(newMovie) {
        let movies = this.checkMoviesFromStorage();

        movies.push(newMovie);

        localStorage.setItem('movies', JSON.stringify(movies));
    }

    static checkMoviesFromStorage() {
        let movies;

        if (localStorage.getItem('movies') === null) {
            movies = [];
        } else {
            movies = JSON.parse(localStorage.getItem('movies'));
        }
        return movies;
    }

    static deleteMovieFromStorage(movieTitle) {
        let movies = this.checkMoviesFromStorage();

        movies.forEach((movie, index) => {
            if (movie.title === movieTitle) {
                movies.splice(index, 1);
            }
        });

        localStorage.setItem('movies', JSON.stringify(movies));
    }

    static clearAllMoviesFromStorage() {
        localStorage.removeItem('movies');
    }
}

