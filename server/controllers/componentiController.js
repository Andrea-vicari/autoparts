const Componenti = require('../models/componentiModel');
const mongoose = require('mongoose');




// Get all Componenti: OK
const vediComponenti = async (req, res)=> {

    console.log("Req from /")
    console.log("View all Componenti")

    const allComponenti = await Componenti.find({}).sort({createdAt: -1});
    res.status(200).json(allComponenti)

}


// Create a NEW Componenti:
const nuovoComponente = async (req, res) => {
    try {
        const {name, author, imageUrl} = req.body;

        const newcomponente = new Book({
            name,
            author,
            imageUrl
        })
        await newcomponente.save()
        return res.json({added: true})
    } catch(err) {
        return res.json({message: "Error in adding book"})
    }
}




module.exports = {
    nuovoComponente,
    vediComponenti
}