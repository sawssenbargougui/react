import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Recherche from './etudiants/Recherche';
import Survey from './path/to/Survey'; // Assurez-vous d'importer correctement le composant Survey
import Error from './path/to/Error'; // Assurez-vous d'importer correctement le composant Error

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <Routes>
    <Route path="/" element={<Recherche />} />
      
    </Routes>
  </Router>
);
