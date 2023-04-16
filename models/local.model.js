const { DataTypes } = require('sequelize');
const dbConection = require('../database/config');

const Local = dbConection.define("local", {
    idLocal: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombreLocal: {
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

module.exports = Local;
