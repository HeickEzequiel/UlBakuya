const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  
  sequelize.define('Usuario_Eventos', {
    UsuarioId: {
      type: DataTypes.JSONB,
     },
    EventsId:{
        type: DataTypes.JSONB,
        allowNull:false
    },
}, { timestamps: false});
};

   