// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Recherche from './Recherche';  // Assurez-vous que le chemin d'importation est correct
import Pays from './Pays';
import Region from './Region';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/recherche/id" element={<Recherche />} />  {/* Utilisez le composant correctement importé */}
      <Route path="Form" element={<form />} />
      <Route path="/pays" element={<Pays />} />
      <Route path="/region/:reg" element={<Region />} />
      
    </Routes>
  </Router>
);

reportWebVitals(console.log);
