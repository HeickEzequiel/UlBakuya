const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Eventos', {
      id: {
         type: DataTypes.UUID,
         defaultValue: DataTypes.UUIDV4,
         unique: true,
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
   },{timestamps: true});
};