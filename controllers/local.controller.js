const { request, response } = require('express');
const db = require('../models/rf/index');

const Locales = db.local;

const getLocales = async (req = request, res = response) => {
    try {
        const locales = await Locales.findAll();
        return res.status(200).json({ Locales: locales });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Ocurrió un error interno en el servidor"
        })
    }
};
const getLocalesActivos = async (req = request, res = response) => {
    try {
        const locales = await Locales.findAll({
            where: {
                activo: 1
            }
        })
        return res.status(200).json({ Locales: locales });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Ocurrió un error interno en el servidor"
        })
    }
};

const postLocal = async (req = request, res) => {
    const { nombreLocal } = req.body
    try {
        const locales = await Locales.create({
            nombreLocal: nombreLocal,
            activo: true
        });

        return res.status(200).send({
            message: "Registrado con éxito.",
            locales
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message: "Ocurrio un error" + error
        });
    }
}

const putLocal = async (req = request, res) => {
    const { nombreLocal, activo, id } = req.body
    try {
        const locales = await Locales.update({
            nombreLocal: nombreLocal,
            activo: activo
        }, {
            where: {
                idLocal: id
            }
        });

        return res.status(200).send({
            message: "Actualizado con éxito.",
            locales
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message: "Ocurrio un error" + error
        });
    }
}

module.exports = {
    getLocales,
    getLocalesActivos,
    postLocal,
    putLocal

}