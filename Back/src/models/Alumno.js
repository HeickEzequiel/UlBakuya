const { DataTypes } = require('sequelize');
const Profesor = require('./Profesor');

module.exports = (sequelize) => {
  
  sequelize.define('Alumno', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      unique: true,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    apellido:{
      type: DataTypes.STRING,
      allowNull: false
    },
    imagen: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fecha_de_nacimiento: {
      type: DataTypes.STRING,
      allowNull: false
    },
    escuela:{
      type: DataTypes.STRING,
      allowNull:false
    },
    graduacion:{
      type: DataTypes.STRING,
      allowNull: true
    },
    fecha_de_examen:{
      type: DataTypes.STRING,
      allowNull: true
    },
    Profesor:{
      type: DataTypes.STRING,
      allowNull:false
    }

  }, { timestamps: false});
};