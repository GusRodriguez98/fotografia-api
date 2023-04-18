const { DataTypes } = require('sequelize');
const dbConection = require('../database/config');

const Empresa = dbConection.define("empresa", {
    idEmpresa: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    tipoEmpresa: {
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

module.exports = Empresa;
