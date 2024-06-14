const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  
  sequelize.define('Escuela_Alumno', {
    EscuelaId: {
      type: DataTypes.JSONB,
     },
    AlumnoId:{
        type: DataTypes.JSONB,
        allowNull:false
    },
}, { timestamps: false});
};