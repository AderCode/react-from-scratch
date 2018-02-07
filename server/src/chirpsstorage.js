const mysql = require('mysql');
const db = require('./db.js');

db.GetUsers( res => {
    console.log(res);
})

