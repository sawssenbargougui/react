import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    {/* Assurez-vous que les composants Router sont correctement importés */}
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/survey" element={<Survey />}>
        {/* Nous imbriquons nos composants dans Survey */}
        <Route path="recherche/id" element={<Recherche />} />
        <Route path="Form" element={<form/>} />
      </Route>
    </Routes>
  </Router>
);

// Si vous souhaitez mesurer les performances de votre application, utilisez la fonction reportWebVitals
reportWebVitals(console.log);

