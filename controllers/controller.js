const {response} = require('express');
const {validationResult} = require('express-validator');
const Quote = require('../models/Quote');

//Función asíncrona para crear una nueva entrada en el backend

const createQuote = async(req, res = response) =>{

    const errors = validationResult( req ); //Checkeo que las entradas que tengo en mi req, son válidas, en caso de que no lo sean, envío una respuesta
                                            //con los errores que se cometieron, nuevamente usando express-validator
    
    if(!errors.isEmpty()){
        console.log(errors);
        return res.status(400).json({
            ok : false,
            errors : errors.mapped()
        })
    }

    try {

        const d = new Date(); 

        const send = {
            name : req.body.name,
            quote : req.body.quote,
            date : `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()} at ${d.getHours()}:${d.getMinutes()}` //Elijo el formato de la fecha
        }

        console.log(send.date)
        const newquote = new Quote(send); //Creo una nueva instancia del modelo de mi base de datos
        await newquote.save(); //Guardo esta nueva instancia

        res.status(201).json({
            ok : true,
            message : 'Usuario registrado'
        })

    } catch (error) {
        
        console.log(error)
        res.status(500).json({
            ok : false,
            message : 'Hubo un problema al registrar'
        });

    }

}

//Función asíncrona para traer todas las entradas del backend y enviarlas en las respuesta.

const selectAllQuotes = async(req, res) =>{

    try {

        const resp = await Quote.find({}); //Busco todas las entradas y las coloco en una constante
        res.status(201).json({
            ok : true,
            message : 'Traído con éxito',
            resp : resp
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok : false,
            message : 'Hubo un problema al registrar'
        });
    }
}

module.exports = {
    createQuote,
    selectAllQuotes
}