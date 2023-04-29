const db = require("../models/rf/index");
const { DB } = require("../database/config");
const bcrypt = require("bcrypt");
const config = require("../config/auth.config.js");
const moment = require('moment');
const Estado = require("../models/estado.model");

const Usuario = db.usuario;
const Cliente = db.cliente;
const Servicio = db.servicio;
const categoria = db.categoria;
const Cobertura = db.cobertura;
const Paquete = db.paquete;
const Local = db.local;

exports.initial = async () => {
    try {

        await Usuario.create({
            usuario: "alexisr",
            password: bcrypt.hashSync(config.secret, 8),
            idRol: 1,
        });



        await Estado.create({
            nombreEstado: 'Sesión'
        })

        await Estado.create({
            nombreEstado: 'Edición'
        })
        await Estado.create({
            nombreEstado: 'Finalizado'
        })
        await Estado.create({
            nombreEstado: 'Anulado'
        })






    } catch (error) {
        console.log(error);
    }
};