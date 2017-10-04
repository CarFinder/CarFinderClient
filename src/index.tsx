import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import 'index.less';
import Signup from './components/SignupForm/SignupForm';
import Home from './components/HomePage/HomePage';

const App = () => {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/signup" component={Signup} />
    </div>
  );
};

ReactDOM.render(
  <BrowserRouter>
    <Route component={App} />
  </BrowserRouter>,
  document.getElementById('app')
);
