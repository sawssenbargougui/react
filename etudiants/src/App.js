
  const etudiants = [
    { "id": "1", "nom": "Mohamed" },
    { "id": "2", "nom": "Ali" },
    { "id": "3", "nom": "Mariem" }
  ];

  return (
    <div>
      <h1>Bonjour</h1>

      {etudiants.map(etudiant => (
        <div key={etudiant.id}>{etudiant.nom}</div>
      ))}

      <SearchEtudiantsTable etudiants={etudiants} />

      {/* Inclure le composant MyComponent */}
      <MyComponent />
    </div>
  );
}

export default App;
