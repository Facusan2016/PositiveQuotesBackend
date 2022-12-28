const { Router }= require('express');
const router = Router();
const { check } = require('express-validator')
const {createQuote, selectAllQuotes} = require('../controllers/controller')

router.post('/save-quote',[
    check('name', 'El nombre es obligatorio.').not().isEmpty(),
    check('quote', 'Debe enviar un mensaje', ).isLength({min : 6})
],
createQuote);
router.get('/select-all-quotes', selectAllQuotes);


module.exports = router