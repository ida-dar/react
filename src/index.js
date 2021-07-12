import React from 'react';
import './styles/normalize.scss';
import './styles/global.scss';
import { Provider } from 'react-redux';
import store from '../redux/store';
import ReactDOM from 'react-dom';
import App from './components/App/App'; // Container allows to separate the layer interacting with the state from the component itself

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);

 