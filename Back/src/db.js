require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT } = process.env;

// Conexión adaptada para Supabase (usa SSL)
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT || 5432,
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // necesario para Render + Supabase
    },
  },
  logging: false,
});

const basename = path.basename(__filename);
const modelDefiners = [];


fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

modelDefiners.forEach((model) => model(sequelize));


let entries = Object.entries(sequelize.models);
let capsEntries = entries.map(([key, value]) => [
  key[0].toUpperCase() + key.slice(1),
  value,
]);
sequelize.models = Object.fromEntries(capsEntries);

const {
  Alumno,
  Profesor,
  Dojan,
  Usuario,
  Eventos,
  Escuela,
  Inscripciones,
} = sequelize.models;

// 🔗 Relaciones
Alumno.belongsToMany(Profesor, {
  through: "Alumno_Profesor",
  foreignKey: "AlumnoId",
  as: "alumnosProfesores",
});
Alumno.belongsToMany(Escuela, {
  through: "Escuela_Alumno",
  foreignKey: "AlumnoId",
  as: "alumnosEscuela",
});

Profesor.belongsToMany(Alumno, {
  through: "Alumno_Profesor",
  foreignKey: "ProfesorId",
  as: "profesoresAlumnos",
});
Profesor.belongsToMany(Dojan, {
  through: "Dojan_Profesor",
  foreignKey: "ProfesorId",
  as: "profesoresDojanes",
});
Profesor.belongsToMany(Escuela, {
  through: "Escuela_Profesor",
  foreignKey: "ProfesorId",
  as: "profesoresEscuela",
});

Dojan.belongsToMany(Profesor, {
  through: "Dojan_Profesor",
  foreignKey: "DojanId",
  as: "dojanesProfesores",
});
Dojan.belongsToMany(Escuela, {
  through: "Escuela_Dojan",
  foreignKey: "DojanId",
  as: "dojanesEscuela",
});

Escuela.belongsToMany(Profesor, {
  through: "Escuela_Profesor",
  foreignKey: "EscuelaId",
  as: "escuelaProfesores",
});
Escuela.belongsToMany(Alumno, {
  through: "Escuela_Alumno",
  foreignKey: "EscuelaId",
  as: "escuelaAlumnos",
});
Escuela.belongsToMany(Dojan, {
  through: "Escuela_Dojan",
  foreignKey: "EscuelaId",
  as: "escuelaDojanes",
});

Usuario.belongsToMany(Eventos, {
  through: "Usuario_Eventos",
  foreignKey: "UsuarioId",
  as: "usuariosEventos",
});

Usuario.belongsTo(Profesor, {
  as: "profesor",
  foreignKey: "idProfesor",
  onUpdate: "CASCADE",
  onDelete: "SET NULL",
});
Profesor.hasOne(Usuario, {
  as: "usuario",
  foreignKey: "idProfesor",
  onUpdate: "CASCADE",
  onDelete: "SET NULL",
});

Eventos.belongsToMany(Usuario, {
  through: "Usuario_Eventos",
  foreignKey: "EventsId",
  as: "eventosUsuarios",
});
Eventos.belongsToMany(Inscripciones, {
  through: "Eventos_Inscripciones",
  foreignKey: "EventosId",
  as: "eventosInscripciones",
});

Inscripciones.belongsToMany(Eventos, {
  through: "Inscripciones_Eventos",
  foreignKey: "InscripcionesId",
  as: "inscripcionesEventos",
});

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};