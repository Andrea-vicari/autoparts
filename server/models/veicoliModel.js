const mongoose = require('mongoose')

const veicoliSchema = new mongoose.Schema({

    marca:{
        type: String,
        required: false
    },
    modello:{
        type: String,
        required: false
    },
    versione:{
        type: String,
        required: false
    },
    annoImmatricolazione:{
        type: Number,
        required: false
    },
    urlImmagine:{
            type: String,
            required: false
    }

},{ timestamps:true })


module.exports = mongoose.model("veicoliModel", veicoliSchema);
