// React
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
import NavBar from './components/Common/NavBar/NavBar';
import Home from './components/HomePage/HomePage';
import Signin from './containers/Signin';

const App = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={Signin} />
      </Switch>
    </div>
  );
};

const sagaMiddleware = createSagaMiddleware();
const initialState = {};

const store: Store<any> = createStore(rootReducer, initialState, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Route component={App} />
    </Provider>
  </BrowserRouter>,
  document.getElementById('app')
);
