const usuario = require('../usuario.model');
const cliente = require('../cliente.model');
const servicio = require('../servicio.model');
const categoria = require('../categoria.model');
const paquete = require('../paquete.model');
const cobertura = require('../cobertura.model');
const local = require('../local.model');
const estado = require('../estado.model');

cobertura.belongsTo(cliente, {
    foreignKey: 'idCliente',
});

cobertura.belongsTo(local, {
    foreignKey: 'idLocal'
});

cobertura.belongsTo(categoria, {
    foreignKey: 'idCategoria'
});

cobertura.belongsTo(servicio, {
    foreignKey: 'idServicio'
});

cobertura.belongsTo(usuario, {
    foreignKey: 'idUsuario'
});

cobertura.belongsTo(paquete, {
    foreignKey: 'idPaquete'
});

cobertura.belongsTo(estado, {
    foreignKey: 'idEstado'
});

const db = {
    usuario,
    cliente,
    servicio,
    cobertura,
    categoria,
    paquete,
    local,
    estado
};


module.exports = db;