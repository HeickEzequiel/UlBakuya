const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  
  sequelize.define('Dojan_Profesor', {
    DojanId: {
      type: DataTypes.JSONB,
     },
    ProfesorId:{
        type: DataTypes.JSONB,
        allowNull:false
    },
}, { timestamps: false});
};