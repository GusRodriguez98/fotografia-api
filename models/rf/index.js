const usuario = require('../usuario.model');
const cliente = require('../cliente.model');
const servicio = require('../servicio.model');
const categoria = require('../categoria.model');
const paquete = require('../paquete.model');
const cobertura = require('../cobertura.model');
const local = require('../local.model');

cliente.hasMany(cobertura, {
    foreignKey: 'idCliente'
});

local.hasMany(cobertura,{
    foreignKey: 'idLocal'
});

categoria.hasMany(cobertura, {
    foreignKey: 'idCategoria'
});

servicio.hasMany(cobertura, {
    foreignKey: 'idServicio'
});

usuario.hasMany(cobertura, {
    foreignKey: 'idUsuario'
});

paquete.hasMany(cobertura, {
    foreignKey: 'idPaquete'
});

const db = {
    usuario,
    cliente,
    servicio,
    cobertura,
    categoria,
    paquete,
    local

};


module.exports = db;