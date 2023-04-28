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
        await Usuario.create({
            usuario: "root2",
            password: bcrypt.hashSync(config.secret, 8),
            idRol: 2,
        });
        await Cliente.create({
            nombre: "Juan",
            numerocelular: "12345",
            identidad: "0000",
        });
        await Cliente.create({
            nombre: "Omar",
            numerocelular: "654321",
            identidad: "1111",
        });
        await Cliente.create({
            nombre: "Erick",
            numerocelular: "6854654",
            identidad: "2222",
        });
        await Cliente.create({
            nombre: "José",
            numerocelular: "68541",
            identidad: "3333",
        });
        await Servicio.create({
            tipoServicio: "Evento",
        });
        await Servicio.create({
            tipoServicio: "Sesion",
        });
        await Servicio.create({
            tipoServicio: "Video",
        });
        await Servicio.create({
            tipoServicio: "Empresa",
        });

        await categoria.create({
            tipoCategoria: "Baby Shower",
            idServicio: "1"

        });
        await categoria.create({
            tipoCategoria: "Boda",
            idServicio: "1"

        });
        await categoria.create({
            tipoCategoria: "15 años",
            idServicio: "1"

        });
        await categoria.create({
            tipoCategoria: "Moda",
            idServicio: "2"

        });

        await Local.create({
            nombreLocal: "Salon",
        });
        await Local.create({
            nombreLocal: "Casa de habitacion",
        });

        await Paquete.create({
            nombrePaquete: "Paquete Basico",
            catidadFotosDigitales: 15,
            fotosImpresas: 1,
            cantFotosImpresas: 5,
            tiempoCobertura: "2023-04-15 02:00:00",
            precio: 1200

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


        await Cobertura.create({
            idServicio: 1,
            idCategoria: 1,
            lugar: "Salón principal",
            fecha: new Date("2023-04-10"),
            idCliente: 1,
            idLocal: 1,
            idUsuario: 1,
            horaInicio: "10:00",
            horaFinal: "12:00",
            idPaquete: 1,
            cantHoras: 2,
            idEstado: 1,
            precio: 1200
        });

        await Cobertura.create({
            idServicio: 2,
            idCategoria: 1,
            lugar: "Casa de habitacion",
            fecha: new Date("2023-04-20"),
            idCliente: 2,
            idLocal: 2,
            horasExtras: true,
            canthorasExtras: "1:00",
            idUsuario: 1,
            horaInicio: "16:00",
            horaFinal: "18:00",
            idPaquete: 1,
            cantHoras: 2,
            idEstado: 2,
            precio: 1500
        });

        await Cobertura.create({
            idServicio: 2,
            idCategoria: 1,
            lugar: "Hotel Gualiqueme",
            fecha: new Date("2023-04-30"),
            idCliente: 2,
            idLocal: 2,
            horasExtras: true,
            canthorasExtras: "1:00",
            idUsuario: 1,
            horaInicio: "18:00",
            horaFinal: "21:00",
            idPaquete: 1,
            cantHoras: 2,
            idEstado: 3,
            precio: 1800
        });



    } catch (error) {
        console.log(error);
    }
};