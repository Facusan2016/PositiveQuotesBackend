const { Router }= require('express');
const router = Router();
const { check } = require('express-validator')
const {createQuote, selectAllQuotes} = require('../controllers/controller')

router.post('/save-quote',[
    check('name', 'Name is required.').not().isEmpty(),
    check('quote', 'Message is required.', ).not().isEmpty()
],
createQuote);
router.get('/select-all-quotes', selectAllQuotes);


module.exports = router