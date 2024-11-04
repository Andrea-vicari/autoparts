
const Images = require('../models/imageModel');
const mongoose = require('mongoose');


// Get all Images: OK
const viewAllImages = async (req, res)=> {

    console.log("Req from /")
    console.log("View all Images")

    const allImages = await Images.find({}).sort({createdAt: -1});
    res.status(200).json(allImages)

}

// Delete
const deleteImmagine = async (req, res)=> {

    const { id } = req.params;

     console.log("== KINGBOY ==")
    console.log("RICHIESTA CANCELLAZIONE Immagine")
    console.log(id)


    try{

    const immagine = await Images.findOneAndDelete({idProdotto: id})


	console.log(immagine)
	res.status(200).json(immagine);
	}

	 catch(error){
      console.log({error: error.message})
      res.status(400).json({error: error.message})
    }


	}


module.exports = {
    viewAllImages,
    deleteImmagine
}
