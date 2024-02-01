import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Editer() {
  const { id } = useParams();
  const [lastname, setNom] = useState('');

  useEffect(() => {
    // Charger les détails de l'étudiant à modifier en fonction de l'ID
    fetch(`https://3002-sawssenbargougui-react-2krul2s6y1f.ws-eu107.gitpod.io/etudiants/${id}`)
      .then(response => response.json())
      .then(data => {
        setNom(data.lastname);
      })
      .catch(error => {
        console.error('Erreur récupération détails étudiant:', error);
      });
  }, [id]);

  const handleSubmit = event => {
    event.preventDefault();

    // Envoyer la mise à jour à l'API
    fetch(`https://3002-sawssenbargougui-react-2krul2s6y1f.ws-eu107.gitpod.io/etudiants/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ lastname }),
    })
      .then(response => {
        if (response.ok) {
          // Rediriger vers la page d'affichage des étudiants après la mise à jour
          window.location.href = '/afficher';
        }
      })
      .catch(error => {
        console.error('Erreur mise à jour étudiant:', error);
      });
  };

  return (
    <div>
      <h1>Modifier un étudiant</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nom:
          <input type="text" value={lastname} disabled />
        </label>
        <button type="submit">Modifier</button>
      </form>
    </div>
  );
}

export default Editer;
