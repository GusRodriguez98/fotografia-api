const { request, response } = require('express');
const db = require('../models/rf/index');

const Cobertura = db.cobertura;
const Cliente = db.cliente;
const Paquete = db.paquete;
const Servicio = db.servicio;
const Categoria = db.categoria;
const Usuario = db.usuario;
const Local = db.local;
const Estado = db.estado;

const getCoberturas = async (req = request, res = response) => {
    try {
        const { idEstado } = req.query;
        const cobertura = await Cobertura.findAll({
            where: { idEstado: idEstado },
            include: [
                {
                    model: Cliente,
                },
                {
                    model: Servicio,
                },
                {
                    model: Categoria,
                },
                {
                    model: Usuario,
                },
                {
                    model: Paquete,
                },
                {
                    model: Local,
                },
                {
                    model: Estado,
                },
            ],
        })

        return res.status(200).json({ coberturas: cobertura });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Ocurrió un error interno en el servidor"
        })
    }
};

const contarCoberturasPorEstado = async (req = request, res = response) => {
    try {
        const sesion = await Cobertura.count({ where: { idEstado: 1 } });
        const edicion = await Cobertura.count({ where: { idEstado: 2 } });
        const finalizacion = await Cobertura.count({ where: { idEstado: 3 } });
        const anulado = await Cobertura.count({ where: { idEstado: 4 } });
        const estados = {
            estados: [
                { idEstado: 1, nombreEstado: "Sesión", tamaño: sesion },
                { idEstado: 2, nombreEstado: "Edición", tamaño: edicion },
                { idEstado: 3, nombreEstado: "Finalización", tamaño: finalizacion },
                { idEstado: 4, nombreEstado: "Anulado", tamaño: anulado }
            ]
        };
        return res.status(200).json(estados);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Ocurrió un error" + error
        });
    }
}





const crearCobertura = async (req = request, res = response) => {

    const { idCliente, idServicio, idCategoria, idPaquete, idLocal, lugar, fecha, horaInicio, horaFinal, cantHoras, precio } = req.body;
    try {
        const cobetura = await Cobertura.create({
            idServicio: idServicio,
            idCategoria: idCategoria,
            lugar: lugar,
            fecha: fecha,
            idCliente: idCliente,
            idLocal: idLocal,
            idUsuario: req.uid,
            horaInicio: horaInicio,
            horaFinal: horaFinal,
            idPaquete: idPaquete,
            cantHoras: cantHoras,
            idEstado: 1,
            precio: precio
        });

        return res.status(200).send({
            message: "Registrado con éxito.",
            cobetura
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message: "Ocurrio un error" + error
        });
    }
}

const actualizarCobertura = async (req = request, res = response) => {
    const { idCobertura, idCliente, idServicio, idCategoria, idPaquete, idLocal, lugar, fecha, horaInicio, horaFinal, cantHoras, precio } = req.body;

    try {
        const cobertura = await Cobertura.findOne({ where: { idCobertura } });

        if (!cobertura) {
            return res.status(404).json({
                message: "Cobertura no encontrada"
            });
        }

        cobertura.idServicio = idServicio;
        cobertura.idCategoria = idCategoria;
        cobertura.lugar = lugar;
        cobertura.fecha = fecha;
        cobertura.idCliente = idCliente;
        cobertura.idLocal = idLocal;
        cobertura.idUsuario = req.uid;
        cobertura.horaInicio = horaInicio;
        cobertura.horaFinal = horaFinal;
        cobertura.idPaquete = idPaquete;
        cobertura.cantHoras = cantHoras;
        cobertura.precio = precio;

        await cobertura.save();

        return res.status(200).json({
            message: "Actualizado con éxito",
            cobertura
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Ocurrió un error" + error
        });
    }
}


const pasarFinalizado = async (req = request, res) => {
    const { idCobertura } = req.query
    try {
        const cobertura = await Cobertura.update({
            idEstado: 3,
        }, {
            where: {
                idCobertura: idCobertura
            }
        });

        return res.status(200).json({
            message: "Actualizado con éxito.",
            cobertura
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Ocurrio un error" + error
        });
    }
}
const pasarEdicion = async (req = request, res) => {
    const { idCobertura } = req.query
    try {
        const cobertura = await Cobertura.update({
            idEstado: 2,
        }, {
            where: {
                idCobertura: idCobertura
            }
        });

        return res.status(200).json({
            message: "Actualizado con éxito.",
            cobertura
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Ocurrio un error" + error
        });
    }
}

const anularCobertura = async (req = request, res) => {
    const { idCobertura } = req.query
    try {
        const cobertura = await Cobertura.update({
            idEstado: 4,
        }, {
            where: {
                idCobertura: idCobertura
            }
        });

        return res.status(200).json({
            message: "Actualizado con éxito.",
            cobertura
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Ocurrio un error" + error
        });
    }
}


module.exports = {
    getCoberturas,
    crearCobertura,
    pasarEdicion,
    pasarFinalizado,
    contarCoberturasPorEstado,
    anularCobertura,
    actualizarCobertura
}