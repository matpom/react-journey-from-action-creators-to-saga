import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ReactDOM from 'react-dom';


import configureStore from './configureStore';
import Home from './components/home.component';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={Home}/>
    </Router>
  </Provider>,
  document.getElementById('root')
);
