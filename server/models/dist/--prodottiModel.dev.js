"use strict";

var mongoose = require('mongoose');

var prodottiSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: false
  }
}, {
  timestamps: true
});
module.exports = mongoose.model("prodottiModel", prodottiSchema);