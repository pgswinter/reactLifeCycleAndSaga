import React, { Component } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import history from './services/history';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './redux/reducers';
import rootSaga from './redux/sagas';

import ListUsers from './components/ListUsers';
import AnotherPage from './components/AnotherPage';

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))
const store = createStore(rootReducer, enhancer)

sagaMiddleware.run(rootSaga)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div>
            <Switch>
              <Route exact path="/" component={ListUsers} />
              <Route path="/another" component={AnotherPage} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
