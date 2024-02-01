// Supprimer2.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function Supprimer2() {
  const { id } = useParams();
  const [msg, setMsg] = useState('');

  useEffect(() => {
    if (id) {
      // Appeler la logique de suppression ici avec l'ID récupéré
      // ...

      // Exemple de requête DELETE
      fetch(`https://3002-sawssenbargougui-react-2krul2s6y1f.ws-eu107.gitpod.io//etudiants/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(response => {
          if (response.ok) {
            setMsg(`Étudiant avec l'ID ${id} supprimé`);
          } else {
            setMsg(`Erreur lors de la suppression de l'étudiant avec l'ID ${id}`);
          }
        })
        .catch(error => {
          console.error('Erreur Suppression étudiant:', error);
          setMsg('Erreur Suppression étudiant');
        });
    }
  }, [id]);

  return (
    <div>
      <h1>Supprimer un étudiant</h1>
      <p>{msg}</p>
      {/* Rediriger vers une autre page avec le composant Link */}
      <Link to="/autre-page">Aller à une autre page</Link>
      {/* ... Autres éléments de votre page ... */}
    </div>
  );
}

export default Supprimer2;


