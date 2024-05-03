class UI {
    static addMovieToUI(newMovie) {

        // <tr>
        //     <td><img src="" class="img-fluid img-thumbnail"></td>
        //     <td></td>
        //     <td></td>
        //     <td><a href="#" id="delete-film" class="btn btn-danger">Filmi Sil</a></td>
        // </tr>

        const movieList = document.getElementById('movies');
        movieList.innerHTML +=
            `
        <tr>
            <td><img src="${newMovie.url}" class="img-fluid img-thumbnail"></td>
            <td>${newMovie.title}</td>
            <td>${newMovie.director}</td>
            <td><a href="#" id="delete-movie" class="btn btn-danger">Delete Movie</a></td>
        </tr>
        `
    }

    static clearInputs(input1, input2, input3) {
        input1.value = "";
        input2.value = "";
        input3.value = "";
    }

    static displayMessages(message, type) {
        const cardBody = document.querySelector('.card-body');
        //Alert division
        const alertDiv = document.createElement('div');
        alertDiv.className = `alert alert-${type}`;
        alertDiv.textContent = message;

        cardBody.appendChild(alertDiv);

        setTimeout(() => {
            alertDiv.remove();
        }, 1500)
    }

    static loadAllMovies(movies) {
        const movieList = document.getElementById('movies');

        movies.forEach(movie => {
            movieList.innerHTML +=
                `
                <tr>
                    <td><img src="${movie.url}" class="img-fluid img-thumbnail"></td>
                    <td>${movie.title}</td>
                    <td>${movie.director}</td>
                    <td><a href="#" id="delete-film" class="btn btn-danger">Delete Movie</a></td>
                </tr>
                `
        });
    }

    static deleteMovieFromUI(element) {
        element.parentElement.parentElement.remove();
    }

    static clearAllMoviesFromUI() {
        const movieList = document.getElementById('movies');

        // movieList.innerHTML = '';

        if (movieList.firstElementChild === null) {
            this.displayMessages('Movie list already empty!', 'danger');
        } else {
            if (confirm('Are you sure you want to delete all movies?')) {
                while (movieList.firstElementChild !== null) {
                    movieList.firstElementChild.remove();
                }
                this.displayMessages('All movies deleted successfully!', 'success');
            }
        }
    }
}

