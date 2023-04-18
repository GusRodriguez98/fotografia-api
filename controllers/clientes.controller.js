const { request, response } = require('express');
const db = require('../models/rf/index');

const Cliente = db.cliente;

const getClientes = async (req = request, res = response) => {
    try {
        const clientes = await Cliente.findAll();
        return res.status(200).json({ Clientes: clientes });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Ocurrió un error interno en el servidor"
        })
    }
};

const getClientesActivos = async (req = request, res = response) => {
    try {
        const clientes = await Cliente.findAll({
            where: {
                activo: 1
            }
        })
        return res.status(200).json({ Clientes: clientes });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Ocurrió un error interno en el servidor"
        })
    }
};


const crearCliente = async (req = request, res = response) => {

    const { nombre, numerocelular, identidad } = req.body;
    console.log(nombre)
    console.log(numerocelular)
    console.log(identidad)
    try {
        const cliente = await Cliente.create({
            nombre: nombre,
            numerocelular: numerocelular,
            identidad: identidad,

        });

        return res.status(200).json({
            message: "Registrado con éxito.",
            cliente
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Ocurrio un error" + error
        });
    }
}

const putCliente = async (req = request, res) => {
    const { idCliente, nombre, numerocelular, identidad, activo } = req.body
    try {
        const cliente = await Cliente.update({
            nombre: nombre,
            numerocelular: numerocelular,
            identidad: identidad,
            activo: activo,
        }, {
            where: {
                idCliente: idCliente
            }
        });

        return res.status(200).json({
            message: "Actualizado con éxito.",
            cliente
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Ocurrio un error" + error
        });
    }
}




module.exports = {
    getClientes,
    getClientesActivos,
    crearCliente,
    putCliente,

}
