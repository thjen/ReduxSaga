import {FETCH_FAILED, FETCH_SUCCEEDED, FETCH_MOVIE, ADD_MOVIE, UPDATE_MOVIE, UPDATE_SUCCEEDED, DELETE_SUCCEEDED } from '../actions/actionType';

const movies = (movies = [], action) => {
  switch(action.type) {
    case FETCH_SUCCEEDED: 
      return action.receiveMovies;
    case FETCH_FAILED:
      return [];
    /*case ADD_MOVIE:
      return [
        ...movies,
        action.newMovie
      ];*/
    /*case UPDATE_MOVIE:
      return movies;*/
    case UPDATE_SUCCEEDED:
      return movies.map(eachMovie => (eachMovie.id === action.movie.id)
        ? {...eachMovie, note: action.movie.note, timestamp: action.movie.timestamp}
        : eachMovie
      );
    case DELETE_SUCCEEDED:
      const filteredMovies = movies.filter(eachMovie => {
        return eachMovie.id !== action.id;
      });
      return filteredMovies;
    default:
      return movies;
  }
}
export default movies;