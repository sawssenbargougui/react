const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3002;

const db = new sqlite3.Database('./test.db');
const createTableQuery = `
  CREATE TABLE IF NOT EXISTS etudiants (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    lastname TEXT,
    firstname TEXT
  )
`;
db.run(createTableQuery);

app.delete('/etudiant/:id', (req, res) => {
  const studentId = req.params.id;
  const sql = `DELETE FROM Etudiant WHERE id = ${studentId}`;

  db.query(sql, (error, result) => {
    if (error) {
      console.error('Erreur lors de la suppression de l\'étudiant', error);
      res.status(500).json({ error: 'Erreur interne du serveur' });
    } else {
      if (result.affectedRows > 0) {
        res.json({ message: 'Étudiant supprimé avec succès' });
      } else {
        res.status(404).json({ error: 'Étudiant non trouvé' });
      }
    }
  });
});

app.get('/etudiants', (req, res) => {
  const sql = 'SELECT * FROM etudiants';
  db.all(sql, (error, rows) => {
    if (error) {
      console.error('Error fetching data', error);
      res.status(500).send('Error fetching data');
    } else {
      res.json(rows);
    }
  });
});

app.get('/etudiants/:id', (req, res) => {
  const id = req.params.id;
  const sql = 'SELECT * FROM etudiants WHERE id = ?';
  db.get(sql, [id], (error, row) => {
    if (error) {
      console.error('Error fetching data', error);
      res.status(500).send('Error fetching data');
    } else {
      if (!row) {
        res.json({ lastname: "Etudiant n'existe pas" });
      } else {
        res.json(row);
      }
    }
  });
});

app.get('/recherchea/:lastname /:ville', (req, res) => {
  const nom = req.params.nom;
  const ville = req.params.ville;
  const sql = 'SELECT * FROM etudiants WHERE nom LIKE ? AND ville LIKE ?';
  db.all(sql, [`%${lastname}%`, `%${ville}%`], (error, rows) => {
    if (error) {
      console.error('Error fetching data', error);
      res.status(500).send('Error fetching data');
    } else {
      res.json(rows);
    }
  });
});

app.put('/etudiant/:id', (req, res) => {
  const updatedStudent = req.body;
  const sql = `UPDATE Etudiant SET
    nom = '${updatedStudent.lastname}',
    prenom = '${updatedStudent.firstname}'
    WHERE id_etudiant = ${updatedStudent.id}`;

  db.query(sql, (error, result) => {
    if (error) {
      console.error('Error updating data', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({ message: 'L\'étudiant a été mis à jour avec succès' });
    }
  });
});
app.delete('/etudiant/:id', (req, res) => {
  const studentId = req.params.id;
  const sql = `DELETE FROM Etudiant WHERE id = ${studentId}`;

  db.query(sql, (error, result) => {
    if (error) {
      console.error('Erreur lors de la suppression de l\'étudiant', error);
      res.status(500).json({ error: 'Erreur interne du serveur' });
    } else {
      if (result.affectedRows > 0) {
        res.json({ message: 'Étudiant supprimé avec succès' });
      } else {
        res.status(404).json({ error: 'Étudiant non trouvé' });
      }
    }
  });
});
app.post('/etudiant', (req, res) => {
  const newStudent = req.body;
  const sql = `INSERT INTO Etudiant (nom, prenom) VALUES
    ('${newStudent.firstname}', '${newStudent.lastname}')`;

  db.query(sql, (error, result) => {
    if (error) {
      console.error('Error adding new student', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({ message: 'Nouvel étudiant ajouté avec succès' });
    }
  });
});

app.get('/etudiants/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const etudiant = await getEtudiantById(id);
    res.json(etudiant);
  } catch (error) {
    console.error('Erreur lors de la récupération des données de l\'étudiant:', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
