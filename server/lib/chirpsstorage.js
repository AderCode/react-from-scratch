'use strict';

var mysql = require('mysql');
var db = require('./db.js');

db.GetUsers(function (res) {
    console.log(res);
});