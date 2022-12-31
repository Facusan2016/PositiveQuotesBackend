const { Router }= require('express');
const router = Router();
const { check } = require('express-validator')
const {createQuote, selectAllQuotes} = require('../controllers/controller')

//Configuración inicial del router

router.post('/save-quote',[
    check('name', 'Name is required.').not().isEmpty(), //Usando express-validator cuand hago la petición de post, me fijo si las entradas no son vacías
    check('quote', 'Message is required.', ).not().isEmpty()
],
createQuote);
router.get('/select-all-quotes', selectAllQuotes);


module.exports = router