const Veicoli = require('../models/veicoliModel');


// Create a NEW workout:
const creaVeicolo = async (req, res)=> {

  console.log("Req from /crea-Veicolo")
  console.log(req.body)


    const {marca, modello, versione, annoImmatricolazione, urlImmagine} = req.body

    try{
        const singoloVeicolo = await Veicoli.create({marca, modello, versione, annoImmatricolazione, urlImmagine})
        res.status(200).json(singoloVeicolo)
    }

    catch(error){
        res.status(400).json({error: error.message})
    }

}

// Vedi tutti i Veicoli
const vediVeicoli = async (req, res)=> {

    console.log("Req from /")
    console.log("View all Veicoli")

    const singoloVeicolo = await Veicoli.find({}).sort({createdAt: -1});
    res.status(200).json(singoloVeicolo)

}


// Vedi singolo Veicolo
const vediSingoloVeicolo = async (req, res)=> {

    console.log("======")
    console.log("Req from /id")
    console.log("Vedi singolo Veicolo")



    const { id } = req.params;

    console.log(id)


     const singoloVeicolo = await Veicoli.find({"_id":id});

    if(!singoloVeicolo){
      return res.status(400).json({error: "No singoloVeicolo found"})
    }
    res.status(200).json(singoloVeicolo);

}

// Cancella singolo Veicolo
const cancellaSingoloVeicolo = async (req, res) =>{

   const { id } = req.params;
   console.log("RICHIESTA CANCELLAZIONE PRODOTTO")
   console.log(id)

   try{

   const Veicolo = await Veicoli.findOneAndDelete({_id: id})

   if(!Veicolo){
       //console.log({error: error.message})
       return res.status(400).json({error: "Nessun prodotto trovato"})
     }
   console.log(Veicolo)
   res.status(200).json(Veicolo);
   }

    catch(error){
     console.log({error: error.message})
     res.status(400).json({error: error.message})
   }
}

// Cerca Veicolo
const cercaVeicolo = async (req, res)=> {


    const { id } = req.params;

    console.log("== ******** ==")
    console.log("Req from /id")
    console.log(id)


     //const singoloCompSearched = await Veicoli.find({"nome":id});

     const singoloCompSearched = await Veicoli.find({nome : {$regex : id, $options:"i"}});

    if(!singoloCompSearched){
      return res.status(400).json({error: "No singoloCompSearched found"})
    }
    res.status(200).json(singoloCompSearched);

}

// Mostra singola categoria
const singolaCategoria = async (req, res)=> {

    console.log("== ******** ==")
    console.log("Req from /id")

    const { id } = req.params;

     const singolaCat = await Veicoli.find({"categoria":id});

    if(!singolaCat){
            return res.status(400).json({error: "No singoloCompSearched found"})
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

    const singolaUbic = await Veicoli.find({"scaffale":scaffale,"campata":campata, "ripiano":ripiano,"cassetta":cassetta});

    if(!singolaUbic){
    console.log("Not found")
      return res.status(400).json({error: "No singoloCompSearched found"})
    }
    res.status(200).json(singolaUbic);


}

// Filtra x Marca e Modello
const filtraVeicolo = async (req, res)=> {

    console.log("== ******** ==")
    console.log("RICHIESTA FILTRO Veicolo")
    const { marca, modello } = req.params;

    console.log(marca)
    console.log(modello)

    //const compoFiltrato = await Veicoli.find({"marca":marca,"modello":modello});

    const compoFiltrato = await Veicoli.find({marca : {$regex : marca, $options:"i"},modello: {$regex : modello, $options:"i"}});

    if(!compoFiltrato){
    console.log("Not found")
      return res.status(400).json({error: "No singoloCompSearched found"})
    }
    console.log(compoFiltrato)
    res.status(200).json(compoFiltrato);


}


// MOdifica Veicolo
const modificaVeicolo = async (req, res)=> {

	const { id } = req.params;
    console.log("RICHIESTA AGGIORNAMENTO Veicolo")
    console.log(id)

    console.log("BODY della request")
    console.log(req)

	Veicoli.findOneAndUpdate({_id: id}, req.body)
    .then(comp => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' }

      )

    );

}

module.exports = {
        vediVeicoli,
        creaVeicolo,
        vediSingoloVeicolo,
        cancellaSingoloVeicolo,
        cercaVeicolo,
        singolaCategoria,
        singolaUbicazione,
        modificaVeicolo,
        filtraVeicolo
}
