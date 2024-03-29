import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import AppTest from './AppTest';
import AppFinal from './AppFinal';
import App from './App';
// Boostrap
import 'bootstrap/dist/css/bootstrap.css';
import './styles/bootstrap.override.css';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle';
// Boostrap icon
import 'bootstrap-icons/font/bootstrap-icons.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='m-5'>
      {/* <AppTest /> */}
      {/* <AppFinal /> */}
      <App />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();