const mysql = require("mysql");

let connection = mysql.createConnection({
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

let getChirps = () => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM chirps", (err, results, field) => {
      if (err) {
        reject();
        connection.end();
        return console.log("¯_(ツ)_/¯ : ", err);
      }
      resolve(results);
    });
  });
};

let getChirp = (id) => {
  return new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM chirps c WHERE c.id = ${id}`, (err, results, field) => {
      if (err) {
        reject();
        connection.end();
        return console.log("¯_(ツ)_/¯ : ", err);
      }
      resolve(results);

    });
  });
};

let deleteChirp = (id) => {
  return new Promise((resolve, reject) => {
    connection.query(`DELETE FROM chirps WHERE id = ${id}`, (err, results, field) => {
      if (err) {
        reject();
        connection.end();
        return console.log("¯_(ツ)_/¯ : ", err);
      }
      resolve(results);

    });
  });
};

let updateChirp = (id, text) => {
  return new Promise((resolve, reject) => {
    connection.query(`UPDATE chirps SET text = '${text}' WHERE id = ${id}`, (err, results, field) => {
      if (err) {
        reject();
        connection.end();
        return console.log("¯_(ツ)_/¯ : ", err);
      }
      resolve(results);

    });
  });
};

let createChirp = (userid, text, location) => {
  return new Promise((resolve, reject) => {
    connection.query(`insert into chirps (userid, text, location) values (${userid}, '${text}', '${location}');`, (err, results, field) => {
      if (err) {
        reject();
        connection.end();
        return console.log("¯_(ツ)_/¯ : ", err);
      }
      checkMentions(text, chirpid)
      resolve(results);

    });
  });
};

let createMention = (userid, chirpid) => {
  return new Promise((resolve, reject) => {
    connection.query(`insert into mentions (userid, chirpid) values (${userid}, '${chirpid}');`, (err, results, field) => {
      if (err) {
        reject();
        connection.end();
        return console.log("¯_(ツ)_/¯ : ", err);
      }
      resolve(results);

    });
  });
};

let getMentions = (userid) => {
  return new Promise((resolve, reject) => {
    connection.query(`call spUserMentions(${userid})`, (err, results, field) => {
      if (err) {
        reject();
        connection.end();
        return console.log("¯_(ツ)_/¯ : ", err);
      }
      resolve(results);

    });
  });
};

let checkMentions = (text, chirpid) => {
  return new Promise((resolve, reject) => {
    connection.query(`select from chirps where id = ${chirpid}`, (err, results, field) => {
      if (err) {
        reject();
        connection.end();
        return console.log("¯_(ツ)_/¯ : ", err);
      }
      let str = results.text.split(' ');
      let index;
      for (let i = 0; i < str.length; i++) {
        let check = str[i].includes('@')
        if (check === true) {
          index = i;
        }
      }
      let userName = str[index].slice(1)
      let userid;
      connection.query(`SELECT u.id FROM users u WHERE name LIKE ${userName}`, (err, results, field) => {
        userid = results.id;
      }) 
      createMention(userid, chirpid)
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
