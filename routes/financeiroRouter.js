var express = require('express');
var router = express.Router();
const FinanceiroController = require('../controllers/FinanceiroController')


/* GET home page. */
router.get('/', FinanceiroController.index);
router.get('/novo-fechamento', FinanceiroController.novoFechamento)
router.get('/fechamentos', FinanceiroController.read)

module.exports = router;
