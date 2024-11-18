const Componenti = require('../models/componentiModel');
const mongoose = require('mongoose');




// Get all Componenti: OK
const vediComponenti = async (req, res)=> {

    console.log("Req from /")
    console.log("View all Componenti")

    const allComponenti = await Componenti.find({}).sort({createdAt: -1});
    res.status(200).json(allComponenti)

}

// Get all Componenti: OK
const vediSingoloComp = async (req, res)=> {

    console.log("Req from /")
    console.log("View all Componenti")

    const allComponenti = await Componenti.find({}).sort({createdAt: -1});
    res.status(200).json(allComponenti)

}






module.exports = {
        vediComponenti,
		vediSingoloComp
}
