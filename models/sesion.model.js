const { DataTypes } = require('sequelize');
const dbConection = require('../database/config');

const Sesion = dbConection.define("sesion", {
    idSesion: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    tipoSesion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    activo: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }

}, {
    timestamps: false,
    freezeTableName: true
});

module.exports = Sesion;
