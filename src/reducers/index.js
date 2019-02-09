import { combineReducers } from "redux";
import counterReducer from './couterReducer';
import movies from './movieReducer';

const reducers = combineReducers({
  counterReducer,
  movies
})
export default reducers;