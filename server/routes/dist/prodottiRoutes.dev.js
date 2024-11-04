"use strict";

var express = require('express');

var _require = require('../controllers/prodottiController'),
    createNewProdotti = _require.createNewProdotti,
    viewAllProdotti = _require.viewAllProdotti,
    deleteProdotto = _require.deleteProdotto,
    vediSingoloProd = _require.vediSingoloProd;

var router = express.Router(); // Get

router.get('/', viewAllProdotti); // GEt single

router.get('/:id', vediSingoloProd); // Delete

router["delete"]('/:id', deleteProdotto); // Update
// Post

router.post('/', createNewProdotti);
module.exports = router;