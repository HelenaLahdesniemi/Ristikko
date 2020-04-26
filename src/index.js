import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './ristikko';
import data from './ristikko';


ReactDOM.render(
  <React.StrictMode>
    <Game data={data} />
  </React.StrictMode>,
  document.getElementById('root')
);



