"use strict";

var express = require('express');

var multer = require('multer');

var path = require('path');

var Images = require('../models/imageModel');

var router = express.Router();

var _require = require('../controllers/imageController'),
    viewAllImages = _require.viewAllImages,
    deleteImmagine = _require.deleteImmagine; // Configure multer storage


var storage = multer.diskStorage({
  destination: function destination(req, file, cb) {
    cb(null, 'public/images');
  },
  filename: function filename(req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
  }
});
var upload = multer({
  storage: storage
});
router.post('/upload', upload.single('file'), function (req, res) {
  // const {image} = req.file
  console.log("*************");
  console.log("*************");
  console.log("*************");
  console.log("Also sprach Zarathustra");
  console.log(req.file);
  console.log("Minima Moralia");
  console.log(req.body);
  Images.create({
    immagineCaricata: req.file.filename,
    idProdotto: req.body.idProdotto
  }).then(function (result) {
    return res.json(result);
  })["catch"](function (error) {
    return console.log(error);
  });
});
router.get('/', viewAllImages); // Delete

router["delete"]('/delete/:id', deleteImmagine);
module.exports = router;