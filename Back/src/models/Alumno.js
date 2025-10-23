const { DataTypes } = require('sequelize');

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
      defaultValue: "https://res.cloudinary.com/damoqjwmk/image/upload/v1723139453/no%20image.png",
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
      allowNull: false
    },
    fecha_de_examen:{
      type: DataTypes.STRING,
      allowNull: true
    },
    profesor:{
      type: DataTypes.ARRAY(DataTypes.STRING),
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