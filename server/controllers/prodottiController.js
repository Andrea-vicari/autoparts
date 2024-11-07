const Prodotti = require('../models/prodottiModel');
const mongoose = require('mongoose');




// Get all Prodotti: OK
const viewAllProdotti = async (req, res)=> {

    console.log("Req from /")
    console.log("View all Prodotti")

    const allProdotti = await Prodotti.find({}).sort({createdAt: -1});
    res.status(200).json(allProdotti)

}


// Create a NEW Prodotti:
const createNewProdotti = async (req, res)=> {


    const {nome, categoria, descrizione, codice, condizione, peso, scaffale, campata, ripiano, cassetta, marca, modello, versione, annoImmatricolazione, unicoID} = req.body


    // Add doc to the Mongo DB

    try{
        const prodotti = await Prodotti.create({nome, categoria, descrizione, codice, condizione, peso, scaffale, campata, ripiano, cassetta, marca, modello, versione, annoImmatricolazione, unicoID})
        res.status(200).json(prodotti)
    }

    catch(error){
        console.log({error: error.message})
        res.status(400).json({error: error.message})
    }

}

// Aggorna Prodotto:
const aggiornaProdotto = async (req, res)=> {

    const { id } = req.params;
    console.log("== KINGBOY ==")
    console.log("RICHIESTA AGGIORNAMENTO PRODOTTO")
    console.log(id)

    const {nome, categoria, descrizione, codice, condizione, peso, scaffale, campata, ripiano, cassetta, marca, modello, versione, annoImmatricolazione, unicoID} = req.body


    // Add doc to the Mongo DB

    try{
    
        const prodotti = await Prodotti.findOneAndUpdate({unicoID: id},{
        ...req.body
    })
        res.status(200).json(prodotti)
    }

    catch(error){
        console.log({error: error.message})
        res.status(400).json({error: error.message})
    }

}


// Delete
const deleteProdotto = async (req, res)=> {

    const { id } = req.params;

     console.log("== KINGBOY ==")
    console.log("RICHIESTA CANCELLAZIONE PRODOTTO")
    console.log(id)


/*
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Nessun prodotto trovato"})
    }
    */
    try{

    const prodotti = await Prodotti.findOneAndDelete({unicoID: id})

    if(!prodotti){
        //console.log({error: error.message})
        return res.status(400).json({error: "Nessun prodotto trovato"})
      }
	console.log(prodotti)
	res.status(200).json(prodotti);
	}

	 catch(error){
      console.log({error: error.message})
      res.status(400).json({error: error.message})
    }


	}

// Get a specific prodotti
const vediSingoloProd = async (req, res)=> {
    console.log("======")
    console.log("Req from /id")
    console.log("Vedi singolo prodotto")

    const { id } = req.params;

     const prodotti = await Prodotti.find({"unicoID":id});
    //const prodotti = await Prodotti.findById(id);

    if(!prodotti){
      return res.status(400).json({error: "No prodotti found"})
    }
    res.status(200).json(prodotti);
}





module.exports = {
    createNewProdotti,
    viewAllProdotti,
    deleteProdotto,
    vediSingoloProd,
    aggiornaProdotto
}