import {INCREMENT, DECREMENT} from '../actions/actionType';
import {delay} from 'redux-saga';
import {put, takeEvery} from 'redux-saga/effects'; 
// put = dispatch action
// take every theo dõi 1 action thay đổi, khi action có sự thay đổi thì nó sẽ thực hiện 1 saga

export function* sayHello() { // this is saga
  console.log("hello world") 
} 

function* increment() {
  console.log('this is increment saga');
}
 
export function* watchIncrement() {
  yield takeEvery(INCREMENT, increment);
}

function* decrement() {
  console.log("this is decrement saga");
}

export function* watchDecrement() {
  yield takeEvery(DECREMENT, decrement);
}