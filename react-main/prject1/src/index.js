import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import App2 from './app2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App nom="Mohamed" age="25" />
    <App nom="Mariem" age="19" />
    <App2 />
  </React.StrictMode>
);

