const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  
  sequelize.define('Escuela_Dojan', {
    EscuelaId: {
      type: DataTypes.JSONB,
     },
    DojanId:{
        type: DataTypes.JSONB,
        allowNull:false
    },
}, { timestamps: false});
};