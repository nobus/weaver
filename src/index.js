import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Scheme4 from './components/Scheme4';
import reducer4 from './redux/reducers/reducer4';

import './styles/index.css';

const store4 = createStore(reducer4);

ReactDOM.render(
  <Provider store={store4}>
    <Scheme4 />
  </Provider>,
  document.getElementById('root')
);
