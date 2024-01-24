import React, { useState } from 'react';

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

  // Décommenter la variable etudiants
  const etudiants = [
    { "id": "1", "nom": "Mohamed" },
    { "id": "2", "nom": "Ali" },
    { "id": "3", "nom": "Mariem" }
  ];

  return (
    <div>
      <h1>Recherche par ID</h1>

      {/* Champ de recherche par ID */}
      <label>
        ID de l'étudiant :{' '}
        <input type="text" value={searchId} onChange={(e) => setSearchId(e.target.value)} />
      </label>
      <button onClick={searchById}>Rechercher</button>

      {/* Résultats de la recherche par ID */}
      <div>
        <h3>Résultats de la recherche par ID :</h3>
        <ul>
          {searchResults.map(result => (
            <li key={result.id}>{result.nom}</li>
          ))}
        </ul>
      </div>

      {/* Affichage de la variable etudiants */}
      <div>
        <h3>Affichage de la variable etudiants :</h3>
        <ul>
          {etudiants.map(etudiant => (
            <li key={etudiant.id}>{etudiant.nom}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Recherche;






