import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//style

import './style/partials/_reset.scss';
import './style/partials/_typography.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
