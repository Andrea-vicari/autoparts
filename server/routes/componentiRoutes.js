const express = require('express');
const Componenti = require('../models/componentiModel');
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
		      versione:req.body.versione,
          	  file: req.file.filename
      })
        .then(result => res.json("Success"))
        .catch(err => res.json(err))
} )

router.patch('/aggiornaimage/:id', upload.single('file'), async (req, res)=>{

	const { id } = req.params;
   //const componente = await Componenti.findByIdAndUpdate(id,{image:req.file.filename})
   const componente = await Componenti.findOneAndUpdate({unicoID: id}, {file:req.file.filename})

    if(!componente){
        return res.status(400).json({error: "Nessun componente trovato"})
    }
    res.status(200).json(componente);


})

const {vediComponenti, aggiungiComponente, vediSingoloComp, cancellaSingoloComponente, cercaComponente, singolaCategoria, singolaUbicazione, modificaComponente, filtraComponente} = require('../controllers/componentiController');

// Get
router.get('/', vediComponenti);


// Get single
router.get('/:id', vediSingoloComp);

// Delete singolo componente
router.delete('/delete/:id', cancellaSingoloComponente);


//Cerca componente
router.get('/cerca/:id', cercaComponente);

// Mostra singola categoria
router.get('/singolacategoria/:id', singolaCategoria);

// Mostra singola ubicazione
router.get('/magazzino/:scaffale/:campata/:ripiano/:cassetta', singolaUbicazione);

// Filtra componente
router.get('/filtra/:marca/:modello', filtraComponente);


// Nuovo aggiorna
router.put('/modifica/:id', modificaComponente);

// Pagination


module.exports = router;
