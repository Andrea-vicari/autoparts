const express = require('express');
const Prodotti = require('../models/prodottiModel');
const multer = require('multer');
const path = require('path');

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



const {viewAllProdotti, deleteProdotto, vediSingoloProd, aggiornaProdotto} = require('../controllers/prodottiController');


const router = express.Router();


// Get
router.get('/', viewAllProdotti);

// GEt single
router.get('/:id', vediSingoloProd);

// Delete
router.delete('/delete/:id', deleteProdotto);

// Update
router.patch('/:id', aggiornaProdotto);

// Post
router.post('/', upload.single('file'), (req, res) => {
    	   Prodotti.create({title: req.body.title, 
        description: req.body.description, 
        file: req.file.filename})
        .then(result => res.json("Success"))
        .catch(err => res.json(err))
} )


module.exports = router;