import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ReactDOM from 'react-dom';

import configureStore from './configureStore';
import Todos from './components/TodoContainer';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={Todos}/>
    </Router>
  </Provider>,
  document.getElementById('root')
);
