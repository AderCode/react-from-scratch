'use strict';

var express = require('express');
var chirpsRouter = require('./chirps');
var router = express.Router();

router.use('/chirps', chirpsRouter);

module.exports = router;