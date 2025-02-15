const { DataTypes } = require('sequelize');

module.exports = (sequelize) =>{
    sequelize.define('Escuela',{
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        unique: true,
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
    
      }, { timestamps: true});
    };