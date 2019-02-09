import {delay} from 'redux-saga';
import {all, call, fork} from 'redux-saga/effects';
import {sayHello, watchDecrement, watchIncrement} from './couterSagas';
import {watchFetchMovies, watchAddMovie, watchUpdateMovie, watchDeleteMovie} from './movieSagas';

function* tasks() {
  const task1 = yield fork(watchFetchMovies);
  const task2 = yield fork(watchAddMovie);
  const task3 = yield fork(watchUpdateMovie);
  const task4 = yield fork(watchDeleteMovie);
}

export default function* rootSaga() {
  /*yield all([ // all: các saga chạy tuần tự 
    sayHello,
    watchIncrement(),
    watchDecrement()
  ]);*/
  //yield call(watchFetchMovies); // call is run a saga with param
  yield call(tasks);
}