import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

import Scheme4 from './containers/Scheme4';
import reducer4 from './redux/reducers/reducer4';

const store4 = createStore(reducer4);

store4.subscribe(() => {
  localStorage.setItem(
    'store4State',
    JSON.stringify(store4.getState())
  );
});

ReactDOM.render(
  <Provider store={store4}>
    <Scheme4 />
  </Provider>,
  document.getElementById('root')
);
