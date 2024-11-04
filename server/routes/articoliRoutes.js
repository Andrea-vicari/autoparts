const express = require('express');



const {createNewProdotti, viewAllProdotti, deleteProdotto,vediSingoloProd} = require('../controllers/prodottiController');


const router = express.Router();




// Get
router.get('/', viewAllProdotti);

// GEt single
router.get('/:id', vediSingoloProd);

// Delete
router.delete('/delete/:id', deleteProdotto);



// Post
router.post('/', createNewProdotti);

module.exports = router;