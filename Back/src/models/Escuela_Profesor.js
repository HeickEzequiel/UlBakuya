const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  
  sequelize.define('Escuela_Profesor', {
    EscuelaId: {
      type: DataTypes.JSONB,
     },
    ProfesorId:{
        type: DataTypes.JSONB,
        allowNull:false
    },
}, { timestamps: false});
};