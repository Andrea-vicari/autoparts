const express = require('express');



const {createNewProdotti, viewAllProdotti, deleteProdotto,vediSingoloProd, aggiornaProdotto} = require('../controllers/prodottiController');


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
router.post('/', createNewProdotti);

module.exports = router;