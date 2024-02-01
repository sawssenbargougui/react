import React, { useState } from 'react';

function Recherche() {
  const [nomValue, setNomValue] = useState('');
  const [villeValue, setVilleValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);

  const handleNomChange = event => {
    setNomValue(event.target.value);
  };

  const handleVilleChange = event => {
    setVilleValue(event.target.value);
  };

  const handleSearch = event => {
    event.preventDefault();

    // Assuming your API endpoint supports searching by both "nom" and "ville"
    fetch(`https://3002-sawssenbargougui-react-2krul2s6y1f.ws-eu107.gitpod.io/?nom=${nomValue}&ville=${villeValue}`)
      .then(response => response.json())
      .then(searchResults => {
        setSearchResults(searchResults);
        setError(null); // Réinitialiser l'état d'erreur
      })
      .catch(error => {
        console.error('Error during search:', error);
        setSearchResults([]);
        setError('Une erreur s\'est produite lors de la recherche.'); // Définir un message d'erreur
      });
  };

  return (
    <div style={{ margin: '0 auto', width: '400px', textAlign: 'center', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
      <h1 style={{ color: '#444', marginBottom: '20px' }}>Recherche </h1>
      <form onSubmit={handleSearch} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input type="text" value={nomValue} onChange={handleNomChange} placeholder="Nom" style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }} />
        <input type="text" value={villeValue} onChange={handleVilleChange} placeholder="Ville" style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }} />
        <button type="submit" style={{ padding: '10px 15px', border: 'none', borderRadius: '4px', backgroundColor: '#007bff', color: 'white', cursor: 'pointer' }}> Rechercher </button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <SearchResults results={searchResults} />
    </div>
  );
}

function SearchResults({ results }) {
  return (
    <div>
      <h2>Résultats de la recherche :</h2>
      {Array.isArray(results) && results.length > 0 ? (
        <ul>
          {results.map((result, index) => (
            <li key={index}>{result.nom} - {result.ville}</li>
          ))}
        </ul>
      ) : (
        <p>Aucun résultat trouvé.</p>
      )}
    </div>
  );
}

export default Recherche;

