import React, {Component} from 'react';
import './App.css';
import rootReducer from './store/reducers';
import {Provider} from 'react-redux';
import {createStore} from "redux";
import Root from './components/Root'

const store = createStore(rootReducer);

export default class App extends Component {

  render() {
    localStorage.clear()
    return (
      <Provider store={store}>
        <Root/>
      </Provider>

    )
  }
}

