const mongoose = require('mongoose')

const componentiSchema = new mongoose.Schema({

    title: {type: String},
    description: {type: String, required: true},
    file: {type: String, required: true}

},{ timestamps:true })


module.exports = mongoose.model("componentiModel", componentiSchema);