import axios from "axios";

const urlGetApi = 'http://192.168.1.26:8888/fetch';
const urlPostApi = 'http://192.168.1.26:8888/insert';
const urlPutApi = 'http://192.168.1.26:8888/update';

function* getMoviesApi() {
  const res = yield axios({
    method: 'GET',
    url: urlGetApi,
    data: null,
  });
  const movies = yield res.status === 200 ? res.data.data : [];
  return movies;
}

function* insertNewMovieApi(newMovie) {
  const res = yield axios({
    method: 'POST',
    url: urlPostApi,
    data: newMovie,
  });
  return yield (res.status === 200); // true or false
}

function* updateMovieApi(movie) {
  const res = yield axios({
    method: 'PUT',
    url: urlPutApi,
    data: movie,
  });
  return yield (res.status === 200); // true or false
}

function* deleteMovieApi(id) {
  const res = yield axios({
    method: 'GET',
    url: `http://192.168.1.26:8888/delete?id=${id}`,
    data: null,
  });
  return yield (res.status === 200);
}

export const Api = {
  getMoviesApi,
  insertNewMovieApi,
  updateMovieApi,
  deleteMovieApi
};

