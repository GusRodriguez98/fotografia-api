const { DataTypes } = require('sequelize');
const dbConection = require('../database/config');

const Servicio = dbConection.define("servicios", {
    idServicio: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    tipoServicio: {
        type: DataTypes.STRING,
        allowNull: false
    },

    activo: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
},{
    timestamps: false,
    freezeTableName: true
});

module.exports = Servicio;
