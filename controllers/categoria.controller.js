
const { request, response } = require('express');
const db = require('../models/rf/index');

const Categoria = db.categoria;

const getCategoriaById = async (req = request, res = response) => {
    const { servicioId } = req.query

    console.log(servicioId)
    try {
        const categoria = await Categoria.findAll({ where: { idServicio: servicioId } }); // Buscar el registro en la base de datos usando el ID
        if (!categoria) {
            return res.status(404).json({ msg: "Categoria no encontrado" }); // Si no se encuentra el categoria, se envía una respuesta 404 (No encontrado)
        }
        return res.status(200).json({ categorias: categoria }); // Enviar el resultado como respuesta en formato JSON
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Ocurrió un error interno en el servidor" }); // Enviar una respuesta de error en caso de excepción
    }
};
const getCategoriasByIdActivas = async (req = request, res = response) => {
    const { servicioId } = req.query

    console.log(servicioId)
    try {
        const categoria = await Categoria.findAll({ where: { idServicio: servicioId, activo: 1 } }); // Buscar el registro en la base de datos usando el ID
        if (!categoria) {
            return res.status(404).json({ msg: "Categoria no encontrado" }); // Si no se encuentra el categoria, se envía una respuesta 404 (No encontrado)
        }
        return res.status(200).json({ categorias: categoria }); // Enviar el resultado como respuesta en formato JSON
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Ocurrió un error interno en el servidor" }); // Enviar una respuesta de error en caso de excepción
    }
};





const postCategoria = async (req = request, res = response) => {

    const { idServicio, tipoCategoria, } = req.body;
    try {
        const categoria = await Categoria.create({
            idServicio: idServicio,
            tipoCategoria: tipoCategoria,

        });

        return res.status(200).send({
            message: "Registrado con éxito.",
            categoria
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message: "Ocurrio un error" + error
        });
    }
}

const putCategoria = async (req = request, res) => {
    const { idCategoria, tipoCategoria, activo } = req.body
    try {
        const categoria = await Categoria.update({
            tipoCategoria: tipoCategoria,
            activo: activo,
        }, {
            where: {
                idCategoria: idCategoria
            }
        });

        return res.status(200).send({
            message: "Actualizado con éxito.",
            categoria
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message: "Ocurrio un error" + error
        });
    }
}


module.exports = {
    getCategoriaById,
    postCategoria,
    putCategoria,
    getCategoriasByIdActivas
}