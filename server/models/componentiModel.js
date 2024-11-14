const mongoose = require('mongoose')

const componentiSchema = new mongoose.Schema({

    name: {type: String},
    author: {type: String, required: true},
    imageUrl: {type: String, required: true}

},{ timestamps:true })


module.exports = mongoose.model("componentiModel", componentiSchema);