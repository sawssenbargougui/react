import React, { useState, useEffect } from 'react';

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
          <li key={item.id}>{item.nom}</li>
        ))}
      </ul>
    </div>
  );
}

const etudiants = [
  { "id": "1", "nom": "Mohamed" },
  { "id": "2", "nom": "Ali" },
  { "id": "3", "nom": "Mariem" }
];


function App() {
  return (
    <div>
      <h1>Bonjour</h1>

      {/* Afficher la liste d'étudiants */}
      {etudiants.map(etudiant => (
        <div key={etudiant.id}>{etudiant.nom}</div>
      ))}

      {/* Inclure le composant MyComponent */}
      <MyComponent />
    </div>
  );
}

export default App;