"use strict";

var express = require("express");
var cors = require("cors");
var apiRouter = require("./routes");
var path = require("path");
var clients = path.join(__dirname, "../client");

var app = express();

app.use(express.urlencoded({ extended: false })); // read on this
app.use(express.static(clients));
app.use(cors());
app.use(express.json());

app.use("/api", apiRouter);

var port = 3000;
app.listen(port, console.log("SERVER RUNNING. LISTENING ON PORT: " + port));