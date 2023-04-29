const { DataTypes } = require('sequelize');
const dbConection = require('../database/config');

const Paquete = dbConection.define("paquete", {
    idPaquete: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    nombrePaquete: {
        type: DataTypes.STRING,
        allowNull: false
    },
    catidadFotosDigitales: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    fotosImpresas: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    cantFotosImpresas: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    tiempoCobertura: {
        type: DataTypes.STRING,
        allowNull: false
    },
    precio: {
        type: DataTypes.DOUBLE,
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

module.exports = Paquete;
