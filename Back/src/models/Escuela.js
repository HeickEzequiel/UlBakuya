const { DataTypes } = require('sequelize');

module.exports = (sequelize) =>{
    sequelize.define('Escuela',{
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: true,
            primaryKey: true
        },
        nombre:{
            type: DataTypes.STRING,
            allowNull: false
        },
        director:{
            type: DataTypes.STRING,
            allowNull: false
        },
        dojan:{
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false
        },
        imagen:{
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {timestamps: false});
};