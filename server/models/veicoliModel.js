const mongoose = require('mongoose')

const componentiSchema = new mongoose.Schema({

    nome:{
        type: String,
        required: false
    },
    categoria:{
        type: String,
        required: false
    },
    descrizione:{
        type: String,
        required: false
    },
    codice:{
        type: String,
        required: false
    },
    condizione:{
        type: String,
        required: false
    },
    peso:{
        type: Number,
        required: false
    },
    scaffale:{
        type: Number,
        required: false
    },
    campata:{
        type: Number,
        required: false
    },
    ripiano:{
        type: Number,
        required: false
    },
    cassetta:{
        type: Number,
        required: false
    },
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


module.exports = mongoose.model("veicoliModel", componentiSchema);
