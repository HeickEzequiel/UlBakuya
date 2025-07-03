require("dotenv").config();
const { Sequelize } = require("sequelize");
const AlumnoModel = require("./models/Alumno.js");
const ProfesorModel = require("./models/Profesor.js");
const DojanModel = require("./models/Dojan.js");
const UsuarioModel = require("./models/Usuario.js");
const EventosModel = require("./models/Eventos.js");
const EscuelasModel = require("./models/Escuela.js");
const InscripcionesModel = require("./models/Inscripciones.js")



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

// AlumnoModel(sequelize);
// ProfesorModel(sequelize);
// DojanModel(sequelize);
// UsuarioModel(sequelize);
// EventosModel(sequelize);
// EscuelasModel(sequelize);
// InscripcionesModel(sequelize);

const { Alumno, Profesor, Dojan, Usuario, Eventos, Escuela, Inscripciones } = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);

Alumno.belongsToMany(
  Profesor,{through:'Alumno_Profesor',foreignKey: 'AlumnoId',as: "alumnosProfesores"});
Alumno.belongsToMany(
  Escuela,{through:'Escuela_Alumno', foreignKey: 'AlumnoId', as: "alumnosEscuela"});

Profesor.belongsToMany(
  Alumno,{through:'Alumno_Profesor',foreignKey: 'ProfesorId',as: "profesoresAlumnos"});
Profesor.belongsToMany(
  Dojan,{through:'Dojan_Profesor',foreignKey: 'ProfesorId', as:"profesoresDojanes"});
Profesor.belongsToMany(
  Escuela,{through:'Escuela_Profesor', foreignKey: 'ProfesorId', as: "profesoresEscuela"});

Dojan.belongsToMany(
  Profesor,{through:'Dojan_Profesor',foreignKey: 'DojanId', as: "dojanesProfesores"});
Dojan.belongsToMany(
  Escuela,{through:'Escuela_Dojan', foreignKey: 'DojanId', as: "dojanesEscuela"});

Escuela.belongsToMany(
  Profesor,{through:'Escuela_Profesor', foreignKey: 'EscuelaId', as: "escuelaProfesores"});
Escuela.belongsToMany(
  Alumno,{through:'Escuela_Alumno', foreignKey: 'EscuelaId', as: "escuelaAlumnos"});
Escuela.belongsToMany(
  Dojan,{through:'Escuela_Dojan', foreignKey: 'EscuelaId', as: "escuelaDojanes"});

Usuario.belongsToMany(
  Eventos,{through:'Usuario_Eventos',foreignKey: 'UsuarioId', as:"usuariosEventos"});

Eventos.belongsToMany(
  Usuario,{through:'Usuario_Eventos',foreignKey: 'EventsId', as:"eventosUsuarios"});
Eventos.belongsToMany(
  Inscripciones,{through:'Eventos_Inscripciones', foreignKey: 'EventosId', as: "eventosInscripciones"});

Inscripciones.belongsToMany(
  Eventos,{through:'Inscripciones_Eventos', foreignKey: 'InscripcionesId', as: "inscripcionesEventos"});

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};