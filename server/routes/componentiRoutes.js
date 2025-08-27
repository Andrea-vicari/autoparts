const express = require('express');
const Componenti = require('../models/componentiModel');
const multer = require('multer')
const cloudinary = require('cloudinary').v2;

const router = express.Router();

async function handleUpload(file) {

    const res = await cloudinary.uploader.upload(file, {
	folder:"Autoparts",
    resource_type: "auto",
    });
    console.log(res)
    return res;
}

const storage = new multer.memoryStorage();

const upload = multer({
  storage,
});

const {creaComponente, vediComponenti, vediSingoloComp, cancellaSingoloComponente, cercaComponente, singolaCategoria, singolaUbicazione, modificaComponente, filtraComponente} = require('../controllers/componentiController');

router.post("/upload", upload.single("my_file"), async (req, res) => {
	try {
	  const b64 = Buffer.from(req.file.buffer).toString("base64");
	  let dataURI = "data:" + req.file.mimetype + ";base64," + b64;

	  const cldRes = await handleUpload(dataURI);

	  res.json(cldRes);
	} catch (error) {
	  console.log(error);
	  res.send({
		message: error.message,
	  });
	}
  });

router.post('/crea-componente', creaComponente);




/*
router.patch('/aggiornaimage/:id', upload.single('file'), async (req, res)=>{

	const { id } = req.params;
   //const componente = await Componenti.findByIdAndUpdate(id,{image:req.file.filename})
   const componente = await Componenti.findOneAndUpdate({_id: id}, {file:req.file.filename})

    if(!componente){
        return res.status(400).json({error: "Nessun componente trovato"})
    }
    res.status(200).json(componente);


})
*/


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
router.patch('/modifica/:id', modificaComponente);

// Pagination


module.exports = router;
