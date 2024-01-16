import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const DATA = [
  { id: "todo-0", name: "Manger", completed: true }, 
  { id: "todo-1", name: "Dormir", completed: false },
  { id: "todo-2", name: "Recommencer", completed: false },
 ];

const DATA2 = [ 
  {id : "1" , name: "All"},
  {id : "2" , name: "Active"},
  {id : "3" , name: "Completed"},
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App tasks={DATA} filters={DATA2} />
  </React.StrictMode>
);

