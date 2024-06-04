const { Router } = require('express');
const enrutador = Router();


enrutador.get('/prueba', (req, res) => { // RUTAS 
    res.send("Esta es una prueba");
    //traer la lista de post
});

module.exports = enrutador;