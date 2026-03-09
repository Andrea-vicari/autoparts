const express = require('express');
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
router.post('/crea-veicolo', creaComponente);

const {vediVeicoli, creaVeicolo} = require('../controllers/veicoliController');

// Get
router.get('/', vediVeicoli);





module.exports = router;
