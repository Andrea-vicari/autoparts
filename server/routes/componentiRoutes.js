const express = require('express');
const Componenti = require('../models/componentiModel');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser')
const multer = require('multer')
const path = require('path')

const router = express.Router();



// Configure multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images');
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });

router.post('/', upload.single('file'), (req, res) => {
    	  Componenti.create({title: req.body.title, 
        description: req.body.description, 
        file: req.file.filename})
        .then(result => res.json("Success"))
        .catch(err => res.json(err))
} )


const {vediComponenti} = require('../controllers/componentiController');

// Get
router.get('/', vediComponenti);


module.exports = router;