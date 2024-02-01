import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Recherche from './Recherche';
import Pays from './Pays';
import Region from './Region';
import Ajouter from './Ajouter';
import Supprimer from './Supprimer';
import RechercheA from './RechercheA';
import Header from './Header';
import Supprimer2 from './Supprimer2';
import Editer from './Editer';

import Form from './Form';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    
    <Route path="/" element={<App />} />
    <Route path="/recherche/:id" element={<Recherche />} />
    <Route path="/form" element={<Form />} />
    <Route path="/pays" element={<Pays />} />
    <Route path="/region/:reg" element={<Region />} />
    <Route path="/ajouter" element={<Ajouter />} />
    <Route path="/supprimer" element={<Supprimer />} />
    <Route path="/recherchea" element={<RechercheA />} />
    {/* Route pour afficher un Supprimer2 individuel */}
    <Route path="/supprimer2/:id" element={<Supprimer2 />} />
    <Route path="/editer/:id" element={<Editer />} />
    <Header />
  </Router>,
);

reportWebVitals(console.log);

