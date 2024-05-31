const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Eventos', {
      id: {
         type: DataTypes.INTEGER,
         autoIncrement: true,
         allowNull: true,
         primaryKey: true
     },
      tipo_de_evento:{
         type: DataTypes.STRING,
         allowNull:false
     },
      horarios: {
         type: DataTypes.STRING,
         allowNull: false
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
   }, { timestamps: false });
};