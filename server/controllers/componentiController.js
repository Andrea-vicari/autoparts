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


// Filtra componente

const filtraComponenti = async (req, res)=> {

    console.log("== ******** ==")
    console.log("Req from /id")
    console.log("FERRA LI!!!!!")

    const { id, brand } = req.params;

     const singoloCompFiltered = await Componenti.find({"categoria":id},{"marca":brand});

    if(!singoloCompFiltered){
      return res.status(400).json({error: "No singoloCompFiltered found"})
    }
    res.status(200).json(singoloCompFiltered);

}

// Mostra singola categoria

const singolaCategoria = async (req, res)=> {

    console.log("== ******** ==")
    console.log("Req from /id")
    console.log("FERRA LI!!!!!")

    const { id } = req.params;

     const singolaCat = await Componenti.find({"categoria":id});

    if(!singolaCat){
            return res.status(400).json({error: "No singoloCompFiltered found"})
    }
    res.status(200).json(singolaCat);

}

// Mostra ubicazione

const singolaUbicazione = async (req, res)=> {

    console.log("== ******** ==")
    console.log("RICHIESTA UBICAZIONE")
    const { scaffale, campata, ripiano, cassetta } = req.params;

    console.log(scaffale)
    console.log(campata)
    console.log(ripiano)
    console.log(cassetta)

    const singolaUbic = await Componenti.find({"scaffale":scaffale,"campata":campata, "ripiano":ripiano,"cassetta":cassetta});

    if(!singolaUbic){
    console.log("Not found")
      return res.status(400).json({error: "No singoloCompFiltered found"})
    }
    res.status(200).json(singolaUbic);


}


// Aggorna Componente:

const aggiornaComponente = async (req, res)=> {

    const { id } = req.params;
    console.log("== KINGBOY ==")
    console.log("RICHIESTA AGGIORNAMENTO COMPONENTE")
    console.log(id)

    const {nome, categoria} = req.body

    console.log("nome")
    console.log(nome)
    console.log("categoria")
    console.log(categoria)

    // Add doc to the Mongo DB

    try{

        const componente = await Componenti.findOneAndUpdate({unicoID: id},{
        ...req.body
    })
        res.status(200).json(componente)
    }

    catch(error){
        console.log({error: error.message})
        res.status(400).json({error: error.message})
    }

}

const tryAggiorna = async (req, res)=> {

	const { id } = req.params;
    console.log("== KINGBOY ==")
    console.log("RICHIESTA AGGIORNAMENTO COMPONENTE")
    console.log(id)

	Componenti.findOneAndUpdate({unicoID: id}, req.body)
    .then(comp => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' }

      )

    );

}

module.exports = {
        vediComponenti,
	   vediSingoloComp,
        cancellaSingoloComponente,
        filtraComponenti,
        aggiornaComponente,
        singolaCategoria,
        singolaUbicazione,
        tryAggiorna
}
