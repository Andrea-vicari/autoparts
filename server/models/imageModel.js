const mongoose = require('mongoose')

const imagesSchema = new mongoose.Schema({

    immagineCaricata:{
            type: String,
            required: false
               	},
    	idProdotto:{
    		type: String,
            required: false
    	}

},{ timestamps:true })


module.exports = mongoose.model("ImageModel", imagesSchema);
