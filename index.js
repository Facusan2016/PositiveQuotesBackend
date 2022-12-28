const express = require('express');
const {dbConection} = require('./database/config');
const cors = require('cors');
require('dotenv').config();

// Crear servidor de Express

const app = express();

app.use(express.static('public'));

app.use(cors())

app.use(express.json());
app.use(express.urlencoded({extended : true}));

dbConection();

app.use('/api', require('./router/router'))


app.listen(process.env.PORT, () =>{
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`)
})