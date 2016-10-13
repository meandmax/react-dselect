import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import list from './list-mock';

ReactDOM.render(
  <App list={list} />,
  document.getElementById('root')
);
