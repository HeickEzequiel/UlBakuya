require("dotenv").config();
const { Sequelize } = require("sequelize");
const AlumnoModel = require("./models/Alumno.js");
const ProfesorModel = require("./models/Profesor.js");
const fs = require('fs');
const path = require('path');
const { DB_USER, DB_PASSWORD, DB_HOST} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/ulbakuya`, {
  logging: false, 
  native: false, 
});
const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });


modelDefiners.forEach(model => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

AlumnoModel(sequelize);
ProfesorModel(sequelize);
const { Alumno, Profesor } = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);

Alumno.belongsToMany(Profesor,{through:'Alumno_Profesor',foreignKey: 'AlumnoId',as: "Profesores"});
Profesor.belongsToMany(Alumno,{through:'Alumno_Profesor',foreignKey: 'ProfesorId',as: "Alumnos"});

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};