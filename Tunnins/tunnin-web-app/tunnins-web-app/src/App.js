import React from 'react';

// Components
import Main from './components/Main';

// Redux
import {applyMiddleware, createStore} from 'redux';
import {logger} from 'redux-logger';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
// Redux Components
import rootReducer from './reducer/index';

// Router
import Router from './components/Router/Router';

const store = createStore(
  rootReducer,
  applyMiddleware(logger, thunk)
);

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
