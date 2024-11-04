const express = require('express');
const multer = require('multer');
const path = require('path');
const Images = require('../models/imageModel');



const router = express.Router();

const {viewAllImages, deleteImmagine} = require('../controllers/imageController');

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


router.post('/upload', upload.single('file'),(req, res) => {
      // const {image} = req.file


	console.log("*************")
	console.log("*************")
	console.log("*************")
	console.log("Also sprach Zarathustra")
	console.log(req.file)
	console.log("Minima Moralia")
	console.log(req.body)


	Images.create({immagineCaricata:req.file.filename, idProdotto:req.body.idProdotto})
	.then(result=>res.json(result))
	.catch(error=>console.log(error))

});




router.get('/', viewAllImages);

// Delete
router.delete('/delete/:id', deleteImmagine);

module.exports = router;

