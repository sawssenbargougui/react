
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function MyComponent() {
  const { region } = useParams(); // Récupérer le paramètre 'region' de l'URL
  const [data, setData] = useState([]);

  useEffect(() => {
    // Utiliser fetch pour récupérer les données depuis une API (remplacez l'URL par la vôtre)
    fetch(`https://restcountries.com/v3.1/region/Africa`)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Erreur :', error));
  }, [region]); // Ajouter 'region' comme dépendance pour que la requête soit refaite lorsque 'region' change

  return (
    <div>
      <h2>Données du Composant avec fetch :</h2>
      <table style={{ minWidth: '300px', minHeight: '100px' }}>
        <thead>
          <tr>
            <th>Drapeau</th>
            <th>Nom</th>
            <th>Code Pays</th>
            <th>Capitale</th>
            <th>Population</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.name.common}>
              <td>
                {/* Remarque : L'API REST Countries ne renvoie pas de lien direct vers des images de drapeaux */}
                {/* Vous devrez adapter cette partie en fonction de la structure des données que l'API fournit */}
                <img
                  src={item.flags.png}
                  alt={`Drapeau de ${item.name.common}`}
                  style={{ maxWidth: '50px', maxHeight: '30px' }}
                />
              </td>
              <td>{item.name.common}</td>
              <td>{item.cca2}</td>
              <td>{item.capital}</td>
              <td>{item.population}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MyComponent;
