import {FETCH_FAILED, FETCH_MOVIE, FETCH_SUCCEEDED, ADD_MOVIE, UPDATE_MOVIE, UPDATE_SUCCEEDED, DELETE_SUCCEEDED, DELETE_MOVIE} from '../actions/actionType';
import {put, takeLatest} from 'redux-saga/effects';
import {Api} from './Api';

function* fetchMovies() {
  try{
    const receiveMovies = yield Api.getMoviesApi();
    yield put({type: FETCH_SUCCEEDED, receiveMovies: receiveMovies}); // receiveMovives from action
  } catch (error) {
    yield put({type: FETCH_FAILED, error});
  }
} 

export function* watchFetchMovies() {
  yield takeLatest(FETCH_MOVIE, fetchMovies);
}

function* addNewMovie(action) {
  console.log('add is click');
  try{
    const result = yield Api.insertNewMovieApi(action.newMovie);
    if (result === true) {
      yield put({type: FETCH_MOVIE, sort: 'desc'});
    }
  } catch(error) {

  }
}

export function* watchAddMovie() {
  yield takeLatest(ADD_MOVIE, addNewMovie);
}

function* updateMovie(action) {
  try{
    const result = yield Api.updateMovieApi(action.movie);
    if (result === true) {
      yield put({type:UPDATE_SUCCEEDED, movie: action.movie});
    }
  } catch(error) {

  }
}

export function* watchUpdateMovie() {
  yield takeLatest(UPDATE_MOVIE, updateMovie)
}

function* deleteMovie(action) {
  try{
    const result = yield Api.deleteMovieApi(action.id);
    if (result === true) {
      yield put({type: DELETE_SUCCEEDED, id: action.id});
    }
  } catch(error) {

  }
}

export function* watchDeleteMovie() {
  yield takeLatest(DELETE_MOVIE, deleteMovie)
}