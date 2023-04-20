const express = require('express');
const cors = require('cors');
const dbConection = require('./database/config');
const init = require("./config/init.config");

class Server {

    constructor() {
        this.app = express();
        process.env.TZ = 'America/Tegucigalpa';
        this.port = process.env.PORT || 3000;
        this.usuariosRoutePath = '/api/usuario';
        this.rutaAuth = '/api/auth';
        this.rutaCliente = '/api/cliente';
        this.rutaServicio = '/api/servicio';
        this.rutaCategoria = '/api/categoria';
        this.rutaPaquete = '/api/paquete';
        this.rutaLocales = '/api/locales';

        this.middlewares();
        this.routes();
        


        //Rutas de mi aplicación
    }

    async syncDB() {
        try {

            const db = require("./models/rf");
            await dbConection.sync({
                force: true
            }).then(() => {
                init.initial();
            });
            console.log('base sincronizada');

        } catch (error) {
            console.log('error pai');
            console.log(error)
        }
    }

    middlewares() {

        // CORS
        this.app.use(cors())

        // Lectura y parseo del body
        this.app.use(express.json()); // Función de express que permite leer y parsear el body de una petición
        this.app.use(express.urlencoded({ extended: true }));
        // Directorio público
        this.app.use(express.static('public'));

    }

    // Endpoints 
    routes() {
        // Ruta de usuarios api
        this.app.use(this.usuariosRoutePath, require('./routes/usuario.routes'));
        this.app.use(this.rutaAuth, require('./routes/auth.routes'));
        this.app.use(this.rutaCliente, require('./routes/clientes.routes'));
        this.app.use(this.rutaServicio, require('./routes/servicio.routes'));
        this.app.use(this.rutaCategoria, require('./routes/categoria.routes'));
        this.app.use(this.rutaPaquete, require('./routes/paquete.routes'));
        this.app.use(this.rutaLocales, require('./routes/locales.routes'));
        this.app.get('/', (req, res) => {
            res.json({ message: 'Bienvenido' });
        });
        this.app.post('/nombre', (req, res) => {
            const {nombre} = req.query
            res.json({ message: 'Bienvenido ' + nombre });
        });

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto: ', this.port);
        });
    }

}

module.exports = Server;
