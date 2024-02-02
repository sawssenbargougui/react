const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './test.db'
  });
const Etudiant = sequelize.define('Etudiant', {
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
 allowNull: true, // L'adresse peut être nulle
 },
});
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));