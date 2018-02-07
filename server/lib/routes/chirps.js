"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _cors = require("cors");

var _cors2 = _interopRequireDefault(_cors);

var _db = require("../db");

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get("/:id?", function (req, res) {
  var id = req.params.id;
  if (id) {
    _db2.default.GetChirp(id).then(function (results) {
      res.send(results);
    });
  } else {
    _db2.default.GetChirps().then(function (results) {
      res.send(results);
    });
  }
  // console.log(res)
});

router.post("/", function (req, res) {
  _db2.default.CreateChirp(1, "" + req.body.text, 'school');
  // console.log("req.body = ", req.body.text);
  // console.log("req.body = ", req.body);
  //   console.log('req.body.text = ', req.body.text)
  res.status(200);
  res.redirect("/");
});

router.put("/:id?", function (req, res) {
  var id = req.params.id;
  _db2.default.UpdateChirp(id, req.body.text);
  // console.log(id);
  // console.log(req.body.text);
  res.status(200);
  res.redirect("/");
});

router.delete("/:id?", function (req, res) {
  var id = req.params.id;
  _db2.default.DeleteChirp(id);
  res.status(200);
  res.redirect("/");
});

exports.default = router;