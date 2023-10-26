import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css"
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBook, faGear, faList, faPencil } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

library.add(faBook, faPencil, faList, faGear)

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8082';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
