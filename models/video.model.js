const { DataTypes } = require('sequelize');
const dbConection = require('../database/config');

const Video = dbConection.define("video", {
    idVideo: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    tipoVideo: {
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

module.exports = Video;
