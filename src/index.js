const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express(); // Inicializamos la API

// Conectamos a la base de datos
require('./db.js');

app.set('port', 3000); // Configuramos el puerto

app.use(morgan('dev')); // Biblioteca para mensajes de LOG
app.use(express.urlencoded({extended: false}));
app.use(express.json());// Configuración para JSON
app.use(cors());        // Habilita el cors

// Configuramos las rutas
app.use('/api', require('./Routes/rutas.js'));

// Levantamos la APP
app.listen(3000, () => {
    console.log(`Servidor en puerto ${app.get('port')}`);
});
