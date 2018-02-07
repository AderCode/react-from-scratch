"use strict";

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  database: "chirpr",
  user: "chirprapp",
  password: "chirpJS"
});

connection.connect();

// let getUsers = () => {
//   connection.query("SELECT * FROM chirps", (err, results, field) => {
//     if (err) {
//       connection.end();
//       return console.log("¯_(ツ)_/¯ : ", err);
//     }
//     results.forEach(item => {
//       console.log(item);
//     });
//     connection.end();
//   });
// };

var getChirps = function getChirps() {
  return new Promise(function (resolve, reject) {
    connection.query("SELECT * FROM chirps", function (err, results, field) {
      if (err) {
        reject();
        connection.end();
        return console.log("¯_(ツ)_/¯ : ", err);
      }
      resolve(results);
    });
  });
};

var getChirp = function getChirp(id) {
  return new Promise(function (resolve, reject) {
    connection.query("SELECT * FROM chirps c WHERE c.id = " + id, function (err, results, field) {
      if (err) {
        reject();
        connection.end();
        return console.log("¯_(ツ)_/¯ : ", err);
      }
      resolve(results);
    });
  });
};

var deleteChirp = function deleteChirp(id) {
  return new Promise(function (resolve, reject) {
    connection.query("DELETE FROM chirps WHERE id = " + id, function (err, results, field) {
      if (err) {
        reject();
        connection.end();
        return console.log("¯_(ツ)_/¯ : ", err);
      }
      resolve(results);
    });
  });
};

var updateChirp = function updateChirp(id, text) {
  return new Promise(function (resolve, reject) {
    connection.query("UPDATE chirps SET text = '" + text + "' WHERE id = " + id, function (err, results, field) {
      if (err) {
        reject();
        connection.end();
        return console.log("¯_(ツ)_/¯ : ", err);
      }
      resolve(results);
    });
  });
};

var createChirp = function createChirp(userid, text, location) {
  return new Promise(function (resolve, reject) {
    connection.query("insert into chirps (userid, text, location) values (" + userid + ", '" + text + "', '" + location + "');", function (err, results, field) {
      if (err) {
        reject();
        connection.end();
        return console.log("¯_(ツ)_/¯ : ", err);
      }
      checkMentions(text, chirpid);
      resolve(results);
    });
  });
};

var createMention = function createMention(userid, chirpid) {
  return new Promise(function (resolve, reject) {
    connection.query("insert into mentions (userid, chirpid) values (" + userid + ", '" + chirpid + "');", function (err, results, field) {
      if (err) {
        reject();
        connection.end();
        return console.log("¯_(ツ)_/¯ : ", err);
      }
      resolve(results);
    });
  });
};

var getMentions = function getMentions(userid) {
  return new Promise(function (resolve, reject) {
    connection.query("call spUserMentions(" + userid + ")", function (err, results, field) {
      if (err) {
        reject();
        connection.end();
        return console.log("¯_(ツ)_/¯ : ", err);
      }
      resolve(results);
    });
  });
};

var checkMentions = function checkMentions(text, chirpid) {
  return new Promise(function (resolve, reject) {
    connection.query("select from chirps where id = " + chirpid, function (err, results, field) {
      if (err) {
        reject();
        connection.end();
        return console.log("¯_(ツ)_/¯ : ", err);
      }
      var str = results.text.split(' ');
      var index = void 0;
      for (var i = 0; i < str.length; i++) {
        var check = str[i].includes('@');
        if (check === true) {
          index = i;
        }
      }
      var userName = str[index].slice(1);
      var userid = void 0;
      connection.query("SELECT u.id FROM users u WHERE name LIKE " + userName, function (err, results, field) {
        userid = results.id;
      });
      createMention(userid, chirpid);
      resolve(results);
    });
  });
};

module.exports = {
  CreateChirp: createChirp,
  DeleteChirp: deleteChirp,
  GetChirps: getChirps,
  GetChirp: getChirp,
  UpdateChirp: updateChirp
};