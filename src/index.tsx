// React
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
// Redux
import { Provider } from 'react-redux';
import { Store, createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './redux/reducers';
import rootSaga from './redux/sagas/index';
// Styles
import 'index.less';
// Components
import Signup from './containers/Signup';
import Home from './components/HomePage/HomePage';
import EmailConfirmation from './components/EmailConfirmation/EmailConfirmation';

const App = () => {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/signup" component={Signup} />
      <Route path="/confirmation/:token" component={EmailConfirmation} />
    </div>
  );
};

const sagaMiddleware = createSagaMiddleware();
const initialState = {};
const composeEnhansers = composeWithDevTools || compose;
const store: Store<any> = createStore(
  rootReducer,
  initialState,
  composeEnhansers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Route component={App} />
    </Provider>
  </BrowserRouter>,
  document.getElementById('app')
);
