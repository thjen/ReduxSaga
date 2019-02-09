import React from 'react';
import {connect} from 'react-redux';
import MovieComponent from '../../components/Movie/MovieComponent';
import {fetchMoviesAct, fetchFailedAct, addMovieAct, fetchSuccessAct, updateMovieAct, updateMovieSuccessAct, deleteMovieAct} from '../../actions/index';

const mapStateToProps = state => {
  return {
    movies: state.movies
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onFetchMovies: () => {
      dispatch(fetchMoviesAct());
    },
    onAddMovie: (newMovie) => {
      dispatch(addMovieAct(newMovie));
    },
    onUpdateMovie: (movie) => {
      dispatch(updateMovieAct(movie));
    },
    onDeleteMovie: (id) => {
      dispatch(deleteMovieAct(id));
    }
  }
}

const MovieContainer = connect(mapStateToProps, mapDispatchToProps)(MovieComponent);
export default MovieContainer;