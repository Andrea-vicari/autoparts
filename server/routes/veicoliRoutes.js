const express = require('express');
const multer = require('multer')
const cloudinary = require('cloudinary').v2;



const router = express.Router();

const {vediVeicoli} = require('../controllers/veicoliController');

// Get
router.get('/', vediVeicoli);





module.exports = router;
