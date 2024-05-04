class LStorage {
    static addMovieToStorage(newMovie) {
       let movies = JSON.parse(localStorage.getItem('movies'));

        // Control: Has this movie been added before?
        if (movies.some(movie => movie.title === newMovie.title)) {
            return;
        } else {
            movies.push(newMovie);

            localStorage.setItem('movies', JSON.stringify(movies));
        }
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

