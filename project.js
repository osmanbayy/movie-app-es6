//Selecting form element
const form = document.getElementById('movie-form');
const titleElement = document.getElementById('title');
const directorElement = document.getElementById('director');
const urlElement = document.getElementById('url');
const secondCardBody = document.querySelectorAll('.card-body')[1];
const clearBtn = document.getElementById('clear-movies')

//Loading all events

eventListeners();

function eventListeners() {

    form.addEventListener('submit', addMovie);

    document.addEventListener('DOMContentLoaded', () => {
        let movies = LStorage.checkMoviesFromStorage();
        UI.loadAllMovies(movies);
    });

    secondCardBody.addEventListener('click', deleteMovie);

    clearBtn.addEventListener('click', clearAllMovies);
}

function addMovie(event) {

    const title = titleElement.value.trim();
    const director = directorElement.value.trim();
    const url = urlElement.value.trim();

    if (title === '' || director === '' || url === '') {
        //Error message
        UI.displayMessages('Fill in all fields!', 'danger');
    } else {
        //New movie
        const newMovie = new Movie(title, director, url);
        //Adding movie to interface
        UI.addMovieToUI(newMovie);
        //Adding movie to LocalStorage
        LStorage.addMovieToStorage(newMovie);
    }
    
    //Show success message
    UI.displayMessages('Movie Added Successfully!', 'succes');

    UI.clearInputs(titleElement, directorElement, urlElement);

    event.preventDefault();
}

function deleteMovie(event) {

    if (event.target.id === 'delete-movie') {

        UI.deleteMovieFromUI(event.target);

        LStorage.deleteMovieFromStorage(event.target.parentElement.previousElementSibling.previousElementSibling.textContent);

        UI.displayMessages('Movie Deleted Successfully!', 'success');
    }
}

function clearAllMovies() {
    UI.clearAllMoviesFromUI();
    LStorage.clearAllMoviesFromStorage();
}
