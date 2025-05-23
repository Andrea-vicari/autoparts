const Componenti = require('../models/componentiModel');


// Vedi tutti i componenti
const vediComponenti = async (req, res)=> {

    console.log("Req from /")
    console.log("View all Componenti")
    console.log('Tuca')

    const page = req.query.p || 1
    const componentiPerPagina = 3


    console.log(page)

    const singoloComponente = await Componenti
    .find({})
    .skip(page * componentiPerPagina)
    .limit(componentiPerPagina)
    .sort({createdAt: -1})
    res.status(200).json(singoloComponente)

}

// Vedi singolo componente
const vediSingoloComp = async (req, res)=> {

    console.log("======")
    console.log("Req from /id")
    console.log("Vedi singolo componente")

    const { id } = req.params;

     const singoloComponente = await Componenti.find({"_id":id});

    if(!singoloComponente){
      return res.status(400).json({error: "No singoloComponente found"})
    }
    res.status(200).json(singoloComponente);

}

// Cancella singolo componente
const cancellaSingoloComponente = async (req, res) =>{

   const { id } = req.params;
   console.log("RICHIESTA CANCELLAZIONE PRODOTTO")
   console.log(id)

   try{

   const componente = await Componenti.findOneAndDelete({_id: id})

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

// Cerca componente
const cercaComponente = async (req, res)=> {


    const { id } = req.params;

    console.log("== ******** ==")
    console.log("Req from /id")
    console.log(id)


     //const singoloCompSearched = await Componenti.find({"nome":id});

     const singoloCompSearched = await Componenti.find({nome : {$regex : id, $options:"i"}});

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

     const singolaCat = await Componenti.find({"categoria":id});

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

    const singolaUbic = await Componenti.find({"scaffale":scaffale,"campata":campata, "ripiano":ripiano,"cassetta":cassetta});

    if(!singolaUbic){
    console.log("Not found")
      return res.status(400).json({error: "No singoloCompSearched found"})
    }
    res.status(200).json(singolaUbic);


}

// Filtra x Marca e Modello
const filtraComponente = async (req, res)=> {

    console.log("== ******** ==")
    console.log("RICHIESTA FILTRO COMPONENTE")
    const { marca, modello } = req.params;

    console.log(marca)
    console.log(modello)

    //const compoFiltrato = await Componenti.find({"marca":marca,"modello":modello});

    const compoFiltrato = await Componenti.find({marca : {$regex : marca, $options:"i"},modello: {$regex : modello, $options:"i"}});

    if(!compoFiltrato){
    console.log("Not found")
      return res.status(400).json({error: "No singoloCompSearched found"})
    }
    console.log(compoFiltrato)
    res.status(200).json(compoFiltrato);


}


// MOdifica componente
const modificaComponente = async (req, res)=> {

	const { id } = req.params;
    console.log("RICHIESTA AGGIORNAMENTO COMPONENTE")
    console.log(id)

	Componenti.findOneAndUpdate({_id: id}, req.body)
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
        cercaComponente,
        singolaCategoria,
        singolaUbicazione,
        modificaComponente,
        filtraComponente
}
