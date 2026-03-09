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

const {vediVeicoli} = require('../controllers/veicoliController');

// Get
router.get('/', vediVeicoli);





module.exports = router;
