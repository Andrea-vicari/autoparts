const express = require('express');


const router = express.Router();

const {vediVeicoli} = require('../controllers/veicoliController');

// Get
router.get('/', vediVeicoli);





module.exports = router;
