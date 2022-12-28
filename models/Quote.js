const {Schema, model}= require('mongoose');

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