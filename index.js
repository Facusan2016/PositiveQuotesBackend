const express = require('express');
const {dbConection} = require('./database/config');
const cors = require('cors');
require('dotenv').config();

// Crear servidor de Express

const app = express();
app.use(express.static('public'));

//Configuración de CORS

app.use(cors())

//Indico que express voy a enviar información en formato JSON

app.use(express.json());
app.use(express.urlencoded({extended : true}));

dbConection(); //Me conecto a la base de datos

app.use('/api', require('./router/router')) //Importo las rutas para el manejo de peticiones.

app.listen(process.env.PORT, () =>{
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`)
})