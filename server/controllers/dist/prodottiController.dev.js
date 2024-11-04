"use strict";

var Prodotti = require('../models/prodottiModel');

var mongoose = require('mongoose'); // Get all Prodotti: OK


var viewAllProdotti = function viewAllProdotti(req, res) {
  var allProdotti;
  return regeneratorRuntime.async(function viewAllProdotti$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log("Req from /");
          console.log("View all Prodotti");
          _context.next = 4;
          return regeneratorRuntime.awrap(Prodotti.find({}).sort({
            createdAt: -1
          }));

        case 4:
          allProdotti = _context.sent;
          res.status(200).json(allProdotti);

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
}; // Create a NEW Prodotti:


var createNewProdotti = function createNewProdotti(req, res) {
  var _req$body, nome, categoria, tipologia, descrizione, codice, condizione, peso, scaffale, campata, ripiano, cassetta, marca, modello, versione, annoImmatricolazione, unicoID, prodotti;

  return regeneratorRuntime.async(function createNewProdotti$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _req$body = req.body, nome = _req$body.nome, categoria = _req$body.categoria, tipologia = _req$body.tipologia, descrizione = _req$body.descrizione, codice = _req$body.codice, condizione = _req$body.condizione, peso = _req$body.peso, scaffale = _req$body.scaffale, campata = _req$body.campata, ripiano = _req$body.ripiano, cassetta = _req$body.cassetta, marca = _req$body.marca, modello = _req$body.modello, versione = _req$body.versione, annoImmatricolazione = _req$body.annoImmatricolazione, unicoID = _req$body.unicoID; // Add doc to the Mongo DB

          _context2.prev = 1;
          _context2.next = 4;
          return regeneratorRuntime.awrap(Prodotti.create({
            nome: nome,
            categoria: categoria,
            tipologia: tipologia,
            descrizione: descrizione,
            codice: codice,
            condizione: condizione,
            peso: peso,
            scaffale: scaffale,
            campata: campata,
            ripiano: ripiano,
            cassetta: cassetta,
            marca: marca,
            modello: modello,
            versione: versione,
            annoImmatricolazione: annoImmatricolazione,
            unicoID: unicoID
          }));

        case 4:
          prodotti = _context2.sent;
          res.status(200).json(prodotti);
          _context2.next = 12;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](1);
          console.log({
            error: _context2.t0.message
          });
          res.status(400).json({
            error: _context2.t0.message
          });

        case 12:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 8]]);
}; // Delete


var deleteProdotto = function deleteProdotto(req, res) {
  var id, prodotti;
  return regeneratorRuntime.async(function deleteProdotto$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          id = req.params.id;
          console.log("== KINGBOY ==");
          console.log("RICHIESTA CANCELLAZIONE PRODOTTO");
          console.log(id);
          /*
              if (!mongoose.Types.ObjectId.isValid(id)){
                  return res.status(404).json({error: "Nessun prodotto trovato"})
              }
              */

          _context3.prev = 4;
          _context3.next = 7;
          return regeneratorRuntime.awrap(Prodotti.findOneAndDelete({
            unicoID: id
          }));

        case 7:
          prodotti = _context3.sent;

          if (prodotti) {
            _context3.next = 10;
            break;
          }

          return _context3.abrupt("return", res.status(400).json({
            error: "Nessun prodotto trovato"
          }));

        case 10:
          console.log(prodotti);
          res.status(200).json(prodotti);
          _context3.next = 18;
          break;

        case 14:
          _context3.prev = 14;
          _context3.t0 = _context3["catch"](4);
          console.log({
            error: _context3.t0.message
          });
          res.status(400).json({
            error: _context3.t0.message
          });

        case 18:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[4, 14]]);
}; // Get a specific prodotti


var vediSingoloProd = function vediSingoloProd(req, res) {
  var id, prodotti;
  return regeneratorRuntime.async(function vediSingoloProd$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          console.log("======");
          console.log("Req from /id");
          console.log("Vedi singolo prodotto");
          id = req.params.id; // const prodotti = await Prodotti.find({"unicoID":id});

          _context4.next = 6;
          return regeneratorRuntime.awrap(Prodotti.findById(id));

        case 6:
          prodotti = _context4.sent;

          if (prodotti) {
            _context4.next = 9;
            break;
          }

          return _context4.abrupt("return", res.status(400).json({
            error: "No prodotti found"
          }));

        case 9:
          res.status(200).json(prodotti);

        case 10:
        case "end":
          return _context4.stop();
      }
    }
  });
};

module.exports = {
  createNewProdotti: createNewProdotti,
  viewAllProdotti: viewAllProdotti,
  deleteProdotto: deleteProdotto,
  vediSingoloProd: vediSingoloProd
};