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

const store = createStore(
  rootReducer,
  applyMiddleware(logger, thunk)
);

function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
