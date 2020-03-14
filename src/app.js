import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import Home from './components/Home'
import 'normalize.css/normalize.css';
import './styles/styles.scss';


const store = configureStore();
const jsx = (
  <Provider store={store}>
    <Home />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));
