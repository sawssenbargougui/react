import React, { useState, useEffect } from 'react';
import jsPDF from 'jspdf';


const ListeEtudiantsPdf = ({ data }) => {
  const printPdf = () => {
    const doc = new jsPDF();
    let y = 10;

    doc.text('Liste des étudiants', 10, y);
    y += 10;

    data.forEach((etudiant) => {
      doc.text(`ID: ${etudiant.id}`, 10, y);
      doc.text(`Nom: ${etudiant.lastname}`, 40, y);
      doc.text(`Prénom: ${etudiant.firstname}`, 80, y);
      doc.text(`Ville: ${etudiant.ville}`, 120, y);
      y += 10;
    });

    doc.save('liste_etudiants.pdf');
  };

  return (
    <div className="App">
      <h1 className='text-center'>Liste d'étudiants</h1>
      <table className='table table-striped mt-3'>
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">prenom</th>
            <th scope="col">nom</th>
            <th scope="col">ville</th>
          </tr>
        </thead>
        <tbody>
  {data.map(item => (
    <tr key={item.id}>
      <th scope="row">{item.id}</th>
      <td>{item.lastname}</td>
      <td>{item.firstname}</td>
      <td>{item.ville}</td>
    </tr>
  ))}
</tbody>
      </table>
      <button className="btn btn-primary" onClick={printPdf}>
        Générer PDF
      </button>
    </div>
  );
};

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://3002-sawssenbargougui-react-2krul2s6y1f.ws-eu107.gitpod.io/etudiants')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Erreur :', error));
  }, []);

  return <ListeEtudiantsPdf data={data} />;
}

export default App;
