import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import {createStore, compose, applyMiddleware} from 'redux';
import reducer from './reducers/portfolioReducer'
import thunk from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
    composeEnhancer(applyMiddleware(thunk)),
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
  );
registerServiceWorker();