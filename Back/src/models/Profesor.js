const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  
  sequelize.define('Profesor', {
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
    instructor_mayor:{
      type: DataTypes.STRING,
      allowNull:false
    },    
    estado:{
      type: DataTypes.ENUM,
      values:['Activo','Suspendido','Inactivo'],
      defaultValue: 'Activo',
      allowNull:true,
    },
    eliminado:{
      type: DataTypes.BOOLEAN,
      defaultValue:false,
      allowNull:true
    }

  }, { timestamps: true});
};