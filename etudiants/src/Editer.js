
import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

function Editer() {
  const { id } = useParams();
  const [etudiant, setEtudiant] = useState({});
  const [nom, setNom] = useState('');
  const history = useHistory();

  useEffect(() => {
    // Charger les détails de l'étudiant à éditer en fonction de l'ID
    fetch(`https://3002-sawssenbargougui-react-2krul2s6y1f.ws-eu107.gitpod.io/etudiants/${id}`)
      .then(response => response.json())
      .then(data => {
        setEtudiant(data);
        setNom(data.lastname || ''); // Utilisez le nom de votre champ dans la base de données
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
      body: JSON.stringify({ lastname: nom }), // Utilisez le nom de votre champ dans la base de données
    })
      .then(response => {
        if (response.ok) {
          // Rediriger vers la page d'affichage des étudiants après la mise à jour
          history.push('/afficher');
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
          ID:
          <input
            type="text"
            value={etudiant.id || ''}
            disabled
          />
        </label>
        <label>
          Nom:
          <input
            type="text"
            value={nom}
            onChange={e => setNom(e.target.value)}
          />
        </label>
        <button type="submit">Modifier</button>
      </form>
    </div>
  );
}

export default Editer;
