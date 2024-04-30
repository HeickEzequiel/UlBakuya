const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Dojan', {
      id: {
         type: DataTypes.INTEGER,
         autoIncrement: true,
         allowNull: true,
         primaryKey: true
      },
      club: {
         type: DataTypes.STRING,
         allowNull: false
      },
      direccion: {
         type: DataTypes.STRING,
         allowNull: false
      },
      imagen:{
        type: DataTypes.STRING,
        allowNull: false
      },
      tel:{
        type: DataTypes.STRING,
        allowNull: false
      },
      profesor: {
         type: DataTypes.ARRAY(DataTypes.STRING),
         allowNull: false,
      },
      horarios: {
         type: DataTypes.STRING,
         allowNull: false
      }
   }, { timestamps: false });
};