import React from 'react';

// Components
import Main from './components/Main';

// Redux
import {applyMiddleware, createStore} from 'redux';
import {logger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import {Provider} from 'react-redux';

function App() {
  return (
    <div>
      <Main />
    </div>
  );
}

export default App;
