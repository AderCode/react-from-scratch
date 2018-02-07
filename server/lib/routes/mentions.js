"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _cors = require("cors");

var _cors2 = _interopRequireDefault(_cors);

var _db = require("../db");

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.get("/:userid", function (req, res) {
  var id = req.params.userid;
  _db2.default.GetMentions(id).then(function (results) {
    res.send(results);
  });
  // console.log(res)
});

exports.default = router;