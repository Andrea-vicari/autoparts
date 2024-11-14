const express = require('express');



const {vediComponenti, nuovoComponente} = require('../controllers/componentiController');


const router = express.Router();

// Get
router.get('/', vediComponenti);

// Post
router.post('/', nuovoComponente);

module.exports = router;