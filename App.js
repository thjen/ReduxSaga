/*import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Counter from './src/components/Counter';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers/index';
import CounterContainer from './src/containers/CounterContainer';
//import createSagaMiddleware from 'redux-saga';
//import rootSaga from './src/sagas/rootSaga';

//const sagaMiddleware = createSagaMiddleware();
let store = createStore(reducers, applyMiddleware(sagaMiddleware));
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <CounterContainer/>
      </Provider>
    );
  }
}
//sagaMiddleware.run(rootSaga);*/
