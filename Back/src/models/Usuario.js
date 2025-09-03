const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Usuario', {
      id: {
         type: DataTypes.UUID,
         defaultValue: DataTypes.UUIDV4,
         allowNull: true,
         primaryKey: true
      },
      idProfesor: {
         type: DataTypes.UUID,
         allowNull: true
      },
      nombre: {
         type: DataTypes.STRING,
         allowNull: false
      },
      apellido: {
         type: DataTypes.STRING,
         allowNull: false
      },
      imagen:{
         type:DataTypes.STRING,
         allowNull: true
      },
      fecha_de_nacimiento:{
         type:DataTypes.STRING,
         allowNull: false
      },
      tel:{
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
         type: DataTypes.STRING,
         allowNull: false,
         validate: {
            isEmail: true,
         }
      },
      password: {
         type: DataTypes.STRING,
         allowNull: false
      },
      nivel:{
         type: DataTypes.ENUM,
         values:['Director','Instructor mayor','Instructor menor','Alumno','Observador'],
         defaultValue:'Observador',
         allowNull:true,
      },
      escuela:{
         type: DataTypes.STRING,
         allowNull:true
      },
      graduacion:{
         type: DataTypes.STRING,
         allowNull: true
      },
      fecha_de_examen:{
         type: DataTypes.STRING
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

   }, { timestamps: true });
};