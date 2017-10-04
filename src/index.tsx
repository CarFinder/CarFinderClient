// React
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
// Redux
import { Provider } from 'react-redux';
import { Store, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './redux/reducers';
// Styles
import 'index.less';
// Components
import Signup from './components/SignupForm/SignupForm';
import Home from './components/HomePage/HomePage';

const App = () => {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/signup" component={Signup} />
      <Route path="/signin" component={Signin} />
    </div>
  );
};

const sagaMiddleware = createSagaMiddleware();
const initialState = {};

const store: Store<any> = createStore(rootReducer, initialState, composeWithDevTools());

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Route component={App} />
    </Provider>
  </BrowserRouter>,
  document.getElementById('app')
);
