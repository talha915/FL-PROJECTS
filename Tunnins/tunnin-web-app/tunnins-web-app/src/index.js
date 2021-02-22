import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './index.scss';

import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom';

import axios from 'axios';

axios.defaults.baseURL = "http://localhost:3000/";

ReactDOM.render(
  <React.Fragment>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.Fragment>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
