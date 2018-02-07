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
        return console.log("\x1b[31m", "¯l_(ツ)_/¯ err: ", err, "\x1b[0m");
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
        return console.log("\x1b[31m", "¯l_(ツ)_/¯ err: ", err, "\x1b[0m");
      }
      resolve(results);
    });
  });
};

var deleteChirp = function deleteChirp(id) {
  return new Promise(function (resolve, reject) {
    connection.query("DELETE FROM mentions WHERE chirpid = " + id + "; DELETE FROM chirps WHERE id = " + id + ";", function (err, results, field) {
      if (err) {
        reject();
        connection.end();
        return console.log("\x1b[31m", "¯l_(ツ)_/¯ err: ", err, "\x1b[0m");
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
        return console.log("\x1b[31m", "¯l_(ツ)_/¯ err: ", err, "\x1b[0m");
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
        return console.log("\x1b[31m", "¯l_(ツ)_/¯ err: ", err, "\x1b[0m");
      }
      checkMentions(text, userid);
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
        return console.log("\x1b[31m", "¯l_(ツ)_/¯ err: ", err, "\x1b[0m");
      }
      resolve(results);
    });
  });
};

var checkMentions = function checkMentions(text, userid) {
  return new Promise(function (resolve, reject) {
    connection.query("select * from chirps where userid = " + userid + " and text = '" + text + "'", function (err, results, field) {
      if (err) {
        reject();
        connection.end();
        return console.log("\x1b[31m", "¯l_(ツ)_/¯ err: ", err, "\x1b[0m");
      } else {
        console.log('\x1b[32m', '(>^.^)> Checking for Mentions...', '\x1b[0m');
        console.log('\x1b[32m', '(>^.^)> 1. results[0].text = ', results[0].text, '\x1b[0m');
        var str = results[0].text.split(" ");
        console.log('\x1b[32m', '(>^.^)> 2. str = ', str, '\x1b[0m');
        var index = void 0;
        for (var i = 0; i < str.length; i++) {
          var check = str[i].includes('@');
          if (check === true) {
            index = i;
          };
        };
        console.log('\x1b[32m', '(>^.^)> 3. index = ', index, '\x1b[0m');
        var chirpid = results[0].id;
        console.log('\x1b[32m', '(>^.^)> 4. chirpid = ', chirpid, '\x1b[0m');
        var userHandle = str[index];
        console.log('\x1b[32m', '(>^.^)> 5. userHandle = ', userHandle, '\x1b[0m');

        if (userHandle) {
          prepareMentions(userHandle, chirpid);
          console.log('\x1b[32m', '(>^.^)> Mention Found. Passing params to PrepareMention()', '\x1b[0m', '\n');
        } else {
          console.log('\x1b[32m', '(>^.^)> No Mention Found.', '\x1b[0m', '\n');
        }

        resolve();
      };
    });
  });
};

var prepareMentions = function prepareMentions(userHandle, chirpid) {
  return new Promise(function (resolve, reject) {
    connection.query("SELECT * FROM users WHERE handle = '" + userHandle + "'", function (err, results, field) {
      if (err) {
        reject();
        connection.end();
        return console.log("\x1b[31m", "¯l_(ツ)_/¯ err: ", err, "\x1b[0m");
      }
      console.log('\x1b[32m', '(>^.^)> Preparing Mentions...', '\x1b[0m');
      console.log('\x1b[32m', '(>^.^)> 1. results = ', results, '\x1b[0m');
      if (results[0].id) {
        console.log('\x1b[32m', '(>^.^)> User Found. Passing params to CreateMention().', '\x1b[0m', '\n');
        createMention(results[0].id, chirpid);
      } else {
        console.log("\x1b[31m", "¯l_(ツ)_/¯ err: ", "User not found in database.", "\x1b[0m", '\n');
      }
      resolve();
    });
  });
};

var createMention = function createMention(userid, chirpid) {
  return new Promise(function (resolve, reject) {
    connection.query("insert into mentions (userid, chirpid) values (" + userid + ", '" + chirpid + "');", function (err, results, field) {
      if (err) {
        reject();
        connection.end();
        return console.log("\x1b[31m", "¯l_(ツ)_/¯ err: ", err, "\x1b[0m");
      }
      console.log('\x1b[32m', '(>^.^)> Creating Mention...', '\x1b[0m');
      console.log('\x1b[32m', '(>^.^)> 1. chirpid = ', chirpid, '\x1b[0m');
      console.log('\x1b[32m', '(>^.^)> 2. chirpid = ', userid, '\x1b[0m');
      console.log('\x1b[32m', '(>^.^)> Mention Created.', '\x1b[0m', '\n');

      resolve(results);
    });
  });
};

module.exports = {
  CreateChirp: createChirp,
  DeleteChirp: deleteChirp,
  GetChirps: getChirps,
  GetChirp: getChirp,
  UpdateChirp: updateChirp,
  GetMentions: getMentions
};