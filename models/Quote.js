const {Schema, model}= require('mongoose');

//Usando mongoose para trabajar con mi base de datos, creo un modelo para todas mis entradas,
//los parámetros "name" y "quote" se envían a la hora de hacer la petición POST, la fecha se consigue de manera local

const QuoteSchema = Schema({

    name:{
        type : String,
    },
    quote:{
        type : String
    },
    date:{
        type : String
    } 

});

module.exports = model('Quote', QuoteSchema );