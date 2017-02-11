import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import Scheme4 from './containers/Scheme4';
import reducer4 from './redux/reducers/reducer4';

const loggerMiddleware = createLogger();

const store4 = createStore(
  reducer4,
  applyMiddleware(loggerMiddleware)
);

/*
store4.subscribe(() => {
  const state = store4.getState();
  delete state.switcher4.diff;


  localStorage.setItem(
    'store4State',
    JSON.stringify(state)
  );
});
*/

ReactDOM.render(
  <Provider store={store4}>
    <Scheme4 />
  </Provider>,
  document.getElementById('root')
);
