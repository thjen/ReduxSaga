import {DECREMENT, INCREMENT, FETCH_MOVIE, ADD_MOVIE, FETCH_SUCCEEDED, FETCH_FAILED
  , UPDATE_MOVIE, UPDATE_SUCCEEDED, DELETE_SUCCEEDED, DELETE_MOVIE } from './actionType';

export const incrementAct = (step) => {
  return {
    type: INCREMENT,
    step: step,
  }
}

export const decrementAct = (step) => {
  return {
    type: DECREMENT,
    step: step
  }
}

export const fetchMoviesAct = (sort) => {
  return {
    type: FETCH_MOVIE,
    sort,
  }
}

export const addMovieAct = (newMovie) => {
  return {
    type: ADD_MOVIE,
    newMovie,
  }
}

// action sent by redux saga
export const fetchSuccessAct = (receiveMovies) => {
  return {
    type: FETCH_SUCCEEDED,
    receiveMovies,
  }
}
export const fetchFailedAct = (error) => {
  return {
    type: FETCH_FAILED,
    error,
  }
}

export const updateMovieAct = (movie) => {
  return {
    type: UPDATE_MOVIE,
    movie
  }
}

// sent by redux saga
export const updateMovieSuccessAct = (movie) => {
  return {
    type: UPDATE_SUCCEEDED,
    movie
  }
}

export const deleteMovieAct = (id) => {
  return {
    type: DELETE_MOVIE,
    id,
  }
}

export const deleteMovieSuccessAct = (id) => {
  return {
    type: DELETE_SUCCEEDED,
    id
  }
}