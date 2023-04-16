const { request, response } = require('express');
const db = require('../models/rf/index');

const Servicio = db.servicio;

const getServicio = async (req = request, res = response) => {
    try {
        const servicio = await Servicio.findAll();
        return res.status(200).json({ Servicios: servicio });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Ocurrió un error interno en el servidor"
        })
    }
};
const getServiciosActivos = async (req = request, res = response) => {
    try {
        const servicios = await Servicio.findAll({
            where: {
                activo: 1
            }
        })
        return res.status(200).json({ Servicios: servicios });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Ocurrió un error interno en el servidor"
        })
    }
};


const postServicio = async (req = request, res) => {
    const { tipoServicio } = req.body
    console.log(tipoServicio);
    try {
        const servicio = await Servicio.create({
            tipoServicio: tipoServicio,
            activo: true
        });

        return res.status(200).send({
            message: "Registrado con éxito.",
            servicio
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message: "Ocurrio un error" + error
        });
    }
}

const putServicio = async (req = request, res) => {
    const { tipoServicio, activo, id } = req.body
    try {
        const servicio = await Servicio.update({
            tipoServicio: tipoServicio,
            activo: activo
        }, {
            where: {
                idServicio: id
            }
        });

        return res.status(200).send({
            message: "Actualizado con éxito.",
            servicio
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message: "Ocurrio un error" + error
        });
    }
}






module.exports = {
    getServicio,
    postServicio,
    putServicio,
    getServiciosActivos
}
