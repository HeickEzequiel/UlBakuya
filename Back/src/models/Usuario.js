const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Usuario', {
      id: {
         type: DataTypes.UUID,
         autoIncrement: true,
         allowNull: true,
         primaryKey: true
      },
      nombre: {
         type: DataTypes.STRING,
         allowNull: false
      },
      apellido: {
         type: DataTypes.STRING,
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
      }
   }, { timestamps: false });
};