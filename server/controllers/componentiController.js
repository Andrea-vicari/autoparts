const Componenti = require('../models/componentiModel');
const mongoose = require('mongoose');




// Get all Componenti: OK
const vediComponenti = async (req, res)=> {

    console.log("Req from /")
    console.log("View all Componenti")

    const singoloComponente = await Componenti.find({}).sort({createdAt: -1});
    res.status(200).json(singoloComponente)

}

// Get all Componenti: OK
const vediSingoloComp = async (req, res)=> {

    console.log("======")
    console.log("Req from /id")
    console.log("Vedi singolo componente")

    const { id } = req.params;

     const singoloComponente = await Componenti.find({"unicoID":id});

    if(!singoloComponente){
      return res.status(400).json({error: "No singoloComponente found"})
    }
    res.status(200).json(singoloComponente);

}


const cancellaSingoloComponente = async (req, res) =>{

   const { id } = req.params;
   console.log("== KINGBOY ==")
   console.log("RICHIESTA CANCELLAZIONE PRODOTTO")
   console.log(id)

   try{

   const componente = await Componenti.findOneAndDelete({unicoID: id})

   if(!componente){
       //console.log({error: error.message})
       return res.status(400).json({error: "Nessun prodotto trovato"})
     }
   console.log(componente)
   res.status(200).json(componente);
   }

    catch(error){
     console.log({error: error.message})
     res.status(400).json({error: error.message})
   }
}





module.exports = {
        vediComponenti,
		vediSingoloComp,
        cancellaSingoloComponente
}
