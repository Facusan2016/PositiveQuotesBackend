const { Router }= require('express');
const router = Router();
const {createQuote, selectAllQuotes} = require('../controllers/controller')

router.post('/save-quote', createQuote);
router.get('/select-all-quotes', selectAllQuotes);


module.exports = router