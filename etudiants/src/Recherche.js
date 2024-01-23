import React, { useState, useEffect } from 'react';

function SearchEtudiantsTable({ etudiants }) {
  return (
    <div>
      <h2>Liste des étudiants :</h2>
      <ul>
        {etudiants.map(etudiant => (
          <li key={etudiant.id}>{etudiant.nom}</li>
        ))}
      </ul>
    </div>
  );
}

function MyComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Utiliser fetch pour récupérer les données depuis une API (remplacez l'URL par la vôtre)
    fetch('https://localhost:3001/etudiants')
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

function Recherche() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchId, setSearchId] = useState('');

  const searchById = () => {
    // Utiliser fetch pour récupérer les résultats de la recherche par ID (remplacez l'URL par la vôtre)
    fetch(`https://localhost:3001/etudiants/${searchId}`)
      .then(response => response.json())
      .then(results => setSearchResults(results))
      .catch(error => console.error('Erreur :', error));
  };

  const etudiants = [
    { "id": "1", "nom": "Mohamed" },
    { "id": "2", "nom": "Ali" },
    { "id": "3", "nom": "Mariem" }
  ];

  return (
    <div>
      <h1>Bonjour</h1>

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
        <div>
          {/* Inclure le composant de recherche avec fetch */}
          <input
            type="text"
            placeholder="Rechercher par ID..."
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)}
          />
          <button onClick={searchById}>Rechercher</button>
        </div>
      )}

      {etudiants.map(etudiant => (
        <div key={etudiant.id}>{etudiant.nom}</div>
      ))}

      <SearchEtudiantsTable etudiants={etudiants} />

      {/* Inclure le composant MyComponent */}
      <MyComponent />
    </div>
  );
}
export default Recherche;

