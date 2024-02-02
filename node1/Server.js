const express = require('express');
const cors = require('cors');
const Modele=require('./Modele')
const bodyParser = require('body-parser');
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './test.db'
});

const etudiants = sequelize.define('etudiants', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  lastname: { 
    type: DataTypes.STRING,
    allowNull: false,
  },
  firstname: { 
    type: DataTypes.STRING,
    allowNull: true,
  },
  
},
{ 
  tableName: "etudiants", 
  timestamps: false 
});

sequelize.sync().then(() => {
  console.log('La synchronisation avec la base de données est faite !');
}).catch((err) => {
  console.error('Erreur lors de la synchronisation avec la base de données :', err);
});

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
/* affichage de tout les etudiants*/
app.get('/etudiants', (req, res) => {
  etudiants.findAll().then((etudiants) => {
    res.json(etudiants);
  });
});
/**order croissant  */
app.get('/etudiants', (req, res) => {
  etudiants.findAll({
    order: [['id', 'DESC']] /*[, pour un autre champs ] */
  })
  .then((etudiants) => {
    res.json(etudiants);
  })
  /*affichage les etudiants by id  */
app.get('/etudiants/:id', (req, res) => {
  const etudiantsId = req.params.id;
  etudiants.findByPk(etudiantsId).then((etudiants) => {
    res.json(etudiants);
  });
});
//* recherche avance 
app.get('/recherchea/:lastname/:firstname', (req, res) => {
  const lastname = req.params.lastname;
  const firstname = req.params.firstname;

  etudiants.findAll({
    where: {
      lastname: {
        [Sequelize.Op.like]: `%${lastname}%`
      },
      firstname: {
        [Sequelize.Op.like]: `%${firstname}%`
      }
    }
  })
  .then((etudiants) => {
    res.json(etudiants);
  })
app.post('/etudiants', (req, res) => {
  const { lastname, firstname, ville } = req.body; 
  etudiants.create({ lastname, firstname, ville }).then((etudiants) => {
    res.json(etudiants);
  });
});
/*mise jour*/
app.put('/etudiants/:id', (req, res) => {
  const etudiantsId = req.params.id;
  const { lastname, firstname, ville } = req.body; 
  etudiants.update({ lastname, firstname, ville }, { where: { id: etudiantsId } }).then(() => {
    res.json({ message: 'Étudiant mis à jour avec succès' });
  });
});

app.delete('/etudiants/:id', (req, res) => {
  const etudiantsId = req.params.id;
  etudiants.destroy({ where: { id: etudiantsId } }).then(() => {
    res.json({ message: 'Étudiant supprimé avec succès' });
  });
});

const port = 3001;
app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});

