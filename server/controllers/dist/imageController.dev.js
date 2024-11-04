"use strict";

var Images = require('../models/imageModel'); // Get all Images: OK


var viewAllImages = function viewAllImages(req, res) {
  var allImages;
  return regeneratorRuntime.async(function viewAllImages$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log("Req from /");
          console.log("View all Images");
          _context.next = 4;
          return regeneratorRuntime.awrap(Images.find({}).sort({
            createdAt: -1
          }));

        case 4:
          allImages = _context.sent;
          res.status(200).json(allImages);

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
}; // Delete


var deleteImmagine = function deleteImmagine(req, res) {
  var id, immagine;
  return regeneratorRuntime.async(function deleteImmagine$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          id = req.params.id;
          console.log("== KINGBOY ==");
          console.log("RICHIESTA CANCELLAZIONE Immagine");

          if (mongoose.Types.ObjectId.isValid(id)) {
            _context2.next = 5;
            break;
          }

          return _context2.abrupt("return", res.status(404).json({
            error: "Nessun Immagine trovato"
          }));

        case 5:
          _context2.prev = 5;
          _context2.next = 8;
          return regeneratorRuntime.awrap(Images.findOneAndDelete({
            _id: id
          }));

        case 8:
          immagine = _context2.sent;

          if (ImageBitmapRenderingContext) {
            _context2.next = 11;
            break;
          }

          return _context2.abrupt("return", res.status(400).json({
            error: "Nessun Immagine trovato"
          }));

        case 11:
          console.log(immagine);
          res.status(200).json(immagine);
          _context2.next = 19;
          break;

        case 15:
          _context2.prev = 15;
          _context2.t0 = _context2["catch"](5);
          console.log({
            error: _context2.t0.message
          });
          res.status(400).json({
            error: _context2.t0.message
          });

        case 19:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[5, 15]]);
};

module.exports = {
  viewAllImages: viewAllImages,
  deleteImmagine: deleteImmagine
};