"use strict";

var express = require("express");
var cors = require("cors");
var router = express.Router();
// const store = require("../middleware/chirpsstore");
var store = require("../db");

router.get("/:id?", function (req, res) {
  var id = req.params.id;
  if (id) {
    store.GetChirp(id).then(function (results) {
      res.send(results);
    });
  } else {
    store.GetChirps().then(function (results) {
      res.send(results);
    });
  }
  // console.log(res)
});

router.post("/", function (req, res) {
  store.CreateChirp(1, "" + req.body.text, 'school');
  // console.log("req.body = ", req.body.text);
  // console.log("req.body = ", req.body);
  //   console.log('req.body.text = ', req.body.text)
  res.status(200);
  res.redirect("/");
});

router.put("/:id?", function (req, res) {
  var id = req.params.id;
  store.UpdateChirp(id, req.body.text);
  console.log(id);
  console.log(req.body.text);
  res.status(200);
  res.redirect("/");
});

router.delete("/:id?", function (req, res) {
  var id = req.params.id;
  store.DeleteChirp(id);
  res.status(200);
  res.redirect("/");
});

module.exports = router;