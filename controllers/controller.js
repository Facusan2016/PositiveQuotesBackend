const {response} = require('express');
const Quote = require('../models/Quote');

const createQuote = async(req, res = response) =>{

    try {

        const newquote = new Quote(req.body);
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