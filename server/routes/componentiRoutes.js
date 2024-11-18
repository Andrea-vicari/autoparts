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
    	  Componenti.create({
          nome: req.body.nome,
          unicoID: req.body.unicoID,
          categoria:req.body.categoria,
          annoImmatricolazione:req.body.annoImmatricolazione,
          categoria: req.body.categoria,
          descrizione: req.body.descrizione,
          codice:req.body.codice,
		  condizione:req.body.condizione,
		  peso:req.body.peso,
		  campata:req.body.campata,
		  scaffale:req.body.scaffale,
		  ripiano:req.body.ripiano,
		  cassetta:req.body.cassetta,
		  marca:req.body.marca,
		  modello:req.body.modello,

          file: req.file.filename
      })
        .then(result => res.json("Success"))
        .catch(err => res.json(err))
} )


const {vediComponenti, vediSingoloComp, cancellaSingoloComponente} = require('../controllers/componentiController');

// Get
router.get('/', vediComponenti);

// GEt single
router.get('/:id', vediSingoloComp);

// Delete singolo prodotto

router.delete('/delete/:id', cancellaSingoloComponente);


module.exports = router;
