const { request, response } = require('express');
const db = require('../models/rf/index');

const Paquete = db.paquete;

const getPaquetes = async (req = request, res = response) => {
    try {
        const Paquetes = await Paquete.findAll();
        return res.status(200).json({ Paquetes: Paquetes });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Ocurrió un error interno en el servidor"
        })
    }
};

const getPaquetesActivos = async (req = request, res = response) => {
    try {
        const paquete = await Paquete.findAll({
            where: {
                activo: 1
            }
        })
        return res.status(200).json({ Paquetes: paquete });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Ocurrió un error interno en el servidor"
        })
    }
};

const crearPaquete = async (req = request, res = response) => {

    const { nombrePaquete, catidadFotosDigitales, fotosImpresas, cantFotosImpresas, tiempoCobertura, precio } = req.body;
    console.log(tiempoCobertura)
    try {
        const paquete = await Paquete.create({
            nombrePaquete: nombrePaquete,
            catidadFotosDigitales: catidadFotosDigitales,
            fotosImpresas: fotosImpresas,
            cantFotosImpresas: cantFotosImpresas,
            tiempoCobertura: tiempoCobertura,
            precio: precio
        });

        return res.status(200).send({
            message: "Registrado con éxito.",
            paquete
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message: "Ocurrio un error" + error
        });
    }
}

const putPaquete = async (req = request, res) => {
    const { idPaquete, nombrePaquete, catidadFotosDigitales, fotosImpresas, cantFotosImpresas, tiempoCobertura, precio, activo } = req.body;
    try {
        const paquete = await Paquete.update({
            nombrePaquete: nombrePaquete,
            catidadFotosDigitales: catidadFotosDigitales,
            fotosImpresas: fotosImpresas,
            cantFotosImpresas: cantFotosImpresas,
            tiempoCobertura: tiempoCobertura,
            precio: precio,
            activo: activo
        }, {
            where: {
                idPaquete: idPaquete
            }
        });

        return res.status(200).send({
            message: "Actualizado con éxito.",
            paquete
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message: "Ocurrio un error" + error
        });
    }
}

module.exports = {
    getPaquetes,
    crearPaquete,
    putPaquete,
    getPaquetesActivos,
}
