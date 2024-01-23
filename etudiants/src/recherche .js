import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Composant de recherche par ID avec fetch
function SearchEtudiantById({ onSearch }) {
  const [searchId, setSearchId] = useState('');

  const handleSearch = () => {
    // Appeler la fonction onSearch avec l'ID saisi
    onSearch(searchId);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Rechercher par ID..."
        value={searchId}
        onChange={(e) => setSearchId(e.target.value)}
      />
      <button onClick={handleSearch}>Rechercher</button>
    </div>
  );
}

// Composant avec fetch et recherche par ID
function MyComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Utiliser fetch pour récupérer les données depuis une API (remplacez l'URL par la vôtre)
    fetch(`https://localhost:3001/etudiants')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Erreur :', error));
  }, []);

  return (
    <div>
      <h2>Données du Composant avec fetch :</h2>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

// Composant principal App
function App() {
  const [searchResults, setSearchResults] = useState([]);

  // Fonction pour effectuer la recherche par ID
  const searchById = (id) => {
    // Utiliser fetch pour récupérer les résultats de la recherche par ID (remplacez l'URL par la vôtre)
    fetch(`https://localhost:3001/etudiants/${id}`)
      .then(response => response.json())
      .then(results => setSearchResults(results))
      .catch(error => console.error('Erreur :', error));
  };

  return (
    <Router>
      <div>
        <h1>Bonjour</h1>

        {/* Inclure le composant de recherche avec fetch */}
        <SearchEtudiantById onSearch={searchById} />

        {/* Afficher les résultats de la recherche par ID */}
        {searchResults.length > 0 ? (
          <div>
            <h3>Résultats de la recherche par ID :</h3>
            <ul>
              {searchResults.map(result => (
                <li key={result.id}>{result.name}</li>
              ))}
            </ul>
          </div>
        ) : (
          // Afficher le composant avec fetch si aucune recherche n'est effectuée
          <MyComponent />
        )}

        {/* Ajouter la route pour la recherche d'un étudiant par ID */}
        <Route path="/etudiant/:id" component={Recherche} />
      </div>
    </Router>
  );
}

export default App;

