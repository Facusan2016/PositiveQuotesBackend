const {response} = require('express');
const {validationResult} = require('express-validator');
const Quote = require('../models/Quote');

const createQuote = async(req, res = response) =>{


    const errors = validationResult( req );
    
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
            date : `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()} at ${d.getHours()}:${d.getMinutes()}`
        }

        console.log(send.date)
        const newquote = new Quote(send);
        await newquote.save();

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

const selectAllQuotes = async(req, res) =>{

    try {

        const resp = await Quote.find({});
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