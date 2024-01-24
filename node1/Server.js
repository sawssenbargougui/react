const express = require('express');
const app = express();
const port = 3001;

// Définition de l'en-tête pour permettre l'accès depuis n'importe où
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
  next();
});

const etudiants = [
  { id: 1, nom: 'John Doe' },
  { id: 2, nom: 'Jane Smith' },
  { id: 3, nom: 'Bob Johnson' }
];

app.get('/etudiants', (req, res) => {
  res.json(etudiants);
});

app.get('/etudiants/:id', (req, res) => {
  const etudiantId = parseInt(req.params.id);
  const etudiant = etudiants.find(etudiant => etudiant.id === etudiantId);

  if (etudiant) {
    res.json(etudiant);
  } else {
    res.status(404).json({ message: 'Etudiant non trouvé' });
  }
});

const classes = [
  { id: 'Ginf21', libelle: 'genie informatique21 cours de jour' },
  { id: 'Ginf22', libelle: 'genie informatique22 cours de soir'  },
  { id: 'Ginf23', libelle: 'genie informatique23 cours de soir'  }
];

app.get('/classes', (req, res) => {
  res.json(classes);
});

app.get('/classes/:id', (req, res) => {
  const classeId = req.params.id;
  const classe = classes.find(classe => classe.id === classeId);

  if (classe) {
    res.json(classe);
  } else {
    res.status(404).json({ message: 'Classe non trouvée' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

