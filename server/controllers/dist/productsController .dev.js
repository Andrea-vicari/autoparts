"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Products = require('../models/ProductModel');

var mongoose = require('mongoose'); // Get all Products: OK


var viewAllProducts = function viewAllProducts(req, res) {
  var allProducts;
  return regeneratorRuntime.async(function viewAllProducts$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log("Req from /");
          console.log("View all Products");
          _context.next = 4;
          return regeneratorRuntime.awrap(Products.find({}).sort({
            createdAt: -1
          }));

        case 4:
          allProducts = _context.sent;
          res.status(200).json(allProducts);

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
}; // Get a specific Product


var getSingleProduct = function getSingleProduct(req, res) {
  var id, Product;
  return regeneratorRuntime.async(function getSingleProduct$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          console.log("======");
          console.log("Req from /id");
          console.log("View single Products");
          id = req.params.id;
          _context2.next = 6;
          return regeneratorRuntime.awrap(Products.find({
            "user": id
          }));

        case 6:
          Product = _context2.sent;

          if (Product) {
            _context2.next = 9;
            break;
          }

          return _context2.abrupt("return", res.status(400).json({
            error: "No Product found"
          }));

        case 9:
          res.status(200).json(Product);

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  });
}; // Get a CLOSED Product


var getClosedProduct = function getClosedProduct(req, res) {
  var Product;
  return regeneratorRuntime.async(function getClosedProduct$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          console.log("***********");
          console.log("Req from /closed");
          _context3.next = 4;
          return regeneratorRuntime.awrap(Products.find({
            "status": "CHIUSO"
          }));

        case 4:
          Product = _context3.sent;

          if (Product) {
            _context3.next = 7;
            break;
          }

          return _context3.abrupt("return", res.status(400).json({
            error: "No Product found"
          }));

        case 7:
          res.status(200).json(Product);

        case 8:
        case "end":
          return _context3.stop();
      }
    }
  });
}; // Confirm a Product


var confirmProduct = function confirmProduct(req, res) {
  var registered, id, Product;
  return regeneratorRuntime.async(function confirmProduct$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          registered = req.body.registered;
          id = req.params.id;
          _context4.next = 4;
          return regeneratorRuntime.awrap(Products.findOneAndUpdate({
            "_id": id
          }, {
            $push: {
              registered: req.body
            }
          }));

        case 4:
          Product = _context4.sent;

          if (Product) {
            _context4.next = 7;
            break;
          }

          return _context4.abrupt("return", res.status(400).json({
            error: "No Product found"
          }));

        case 7:
          res.status(200).json(Product);

        case 8:
        case "end":
          return _context4.stop();
      }
    }
  });
}; // Update a Product


var updateProduct = function updateProduct(req, res) {
  var _req$body, status, dataChiusura, id, Product;

  return regeneratorRuntime.async(function updateProduct$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _req$body = req.body, status = _req$body.status, dataChiusura = _req$body.dataChiusura;
          id = req.params.id;
          _context5.next = 4;
          return regeneratorRuntime.awrap(Products.findOneAndUpdate({
            "_id": id
          }, _objectSpread({}, req.body)));

        case 4:
          Product = _context5.sent;

          if (Product) {
            _context5.next = 7;
            break;
          }

          return _context5.abrupt("return", res.status(400).json({
            error: "No Product found"
          }));

        case 7:
          res.status(200).json(Product);

        case 8:
        case "end":
          return _context5.stop();
      }
    }
  });
}; // Create a NEW Product:


var createNewProduct = function createNewProduct(req, res) {
  var _req$body2, today, user, title, series, reps, rest, loads, status, Product;

  return regeneratorRuntime.async(function createNewProduct$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _req$body2 = req.body, today = _req$body2.today, user = _req$body2.user, title = _req$body2.title, series = _req$body2.series, reps = _req$body2.reps, rest = _req$body2.rest, loads = _req$body2.loads, status = _req$body2.status; // Add doc to the Mongo DB

          _context6.prev = 1;
          _context6.next = 4;
          return regeneratorRuntime.awrap(Products.create({
            today: today,
            user: user,
            title: title,
            series: series,
            reps: reps,
            rest: rest,
            loads: loads,
            status: status
          }));

        case 4:
          Product = _context6.sent;
          res.status(200).json(Product);
          _context6.next = 11;
          break;

        case 8:
          _context6.prev = 8;
          _context6.t0 = _context6["catch"](1);
          res.status(400).json({
            error: _context6.t0.message
          });

        case 11:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[1, 8]]);
}; // Delete a Product


var deleteProduct = function deleteProduct(req, res) {
  var id, Product;
  return regeneratorRuntime.async(function deleteProduct$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          id = req.params.id;

          if (mongoose.Types.ObjectId.isValid(id)) {
            _context7.next = 3;
            break;
          }

          return _context7.abrupt("return", res.status(404).json({
            error: "No Product found"
          }));

        case 3:
          _context7.next = 5;
          return regeneratorRuntime.awrap(Products.findOneAndDelete({
            _id: id
          }));

        case 5:
          Product = _context7.sent;

          if (Product) {
            _context7.next = 8;
            break;
          }

          return _context7.abrupt("return", res.status(400).json({
            error: "No Product found"
          }));

        case 8:
          res.status(200).json(Product);

        case 9:
        case "end":
          return _context7.stop();
      }
    }
  });
};

module.exports = {
  createNewProduct: createNewProduct,
  viewAllProducts: viewAllProducts,
  getSingleProduct: getSingleProduct,
  deleteProduct: deleteProduct,
  updateProduct: updateProduct,
  confirmProduct: confirmProduct,
  getClosedProduct: getClosedProduct
};