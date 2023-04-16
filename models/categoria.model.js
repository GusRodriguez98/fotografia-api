const { DataTypes } = require('sequelize');
const dbConection = require('../database/config');

const Categoria = dbConection.define("categoria", {
    idCategoria: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    idServicio: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    tipoCategoria: {
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

module.exports = Categoria;
