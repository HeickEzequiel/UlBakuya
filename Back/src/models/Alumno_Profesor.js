const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  
  sequelize.define('Alumno_Profesor', {
    AlumnoId: {
      type: DataTypes.JSONB,
     },
    ProfesorId:{
        type: DataTypes.JSONB,
        allowNull:false
    },
}, { timestamps: false});
};

   