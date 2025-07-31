const { DataTypes } =require('sequelize')

module.exports = (sequelize) =>{
    sequelize.define('Inscripciones',{
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            unique: true,
            primaryKey: true
        },
        idEvento:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        tipo_de_evento:{
            type: DataTypes.STRING,
            allowNull:false
        },
        fecha_del_evento:{
            type: DataTypes.STRING,
            allowNull:false
        },
        horarios: {
            type: DataTypes.STRING,
            allowNull: false
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull:false,
        },
        apellido: {
            type: DataTypes.STRING,
            allowNull:false
        },
        edad: {
            type: DataTypes.STRING,
            allowNull:false
        },
        altura:{
            type: DataTypes.STRING,
            allowNull:false
        },
        peso:{
            type: DataTypes.STRING,
            allowNull:false
        },
        escuela:{
            type: DataTypes.STRING,
            allowNull:false
        },
        profesor:{
            type: DataTypes.STRING,
            allowNull:false
        },
        graduacion_actual:{
            type: DataTypes.STRING,
            allowNull:false
        },
        proxima_graduacion:{
            type: DataTypes.STRING,
            allowNull:false
        },
        imagen:{
            type: DataTypes.STRING,
            allowNull:false
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
}