const { DataTypes } = require('sequelize');
const dbConection = require('../database/config');

const Cliente = dbConection.define("cliente", {
    idCliente: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false // no permite valores nulos
    },
    numerocelular: {
        type: DataTypes.STRING,
        allowNull: false // no permite valores nulos
    },
    identidad: {
        type: DataTypes.STRING,
        allowNull: true // permite valores nulos
    },
    activo: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
},{
    timestamps: false,
    freezeTableName: true
});

module.exports = Cliente;
