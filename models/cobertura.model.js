const { DataTypes } = require('sequelize');
const dbConnection = require('../database/config');

const Cobertura = dbConnection.define('cobertura', {
  idCobertura: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  idCliente: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  idServicio: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  idCategoria: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  idUsuario: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  idPaquete: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  idLocal: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  lugar: {
    type: DataTypes.STRING,
    allowNull: false
  },

  fecha: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },


  horaInicio: {
    type: DataTypes.TIME,
    allowNull: false
  },
  horaFinal: {
    type: DataTypes.TIME,
    allowNull: false
  },

  cantHoras: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  idEstado: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  precio: {
    type: DataTypes.DOUBLE,
    allowNull: false
  },


}, {
  timestamps: false,
  freezeTableName: true
});

module.exports = Cobertura;
