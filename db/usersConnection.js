const mysql = require('mysql');

const pool = mysql.createPool({
  connectionLimit: 10,
  password: 'tbsb66hbw3qu9hkv',
  user: 'j8c7791fxu2jp5zc',
  database: 'g4ojcvx536b57wn4',
  host: 'i2cpbxbi4neiupid.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  port: '3306'
})

let usersdb = {};

usersdb.all = () => {
  return new Promise((resolve, reject) => {
    pool.query('SELECT * FROM empleado', (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    })
  })
}

usersdb.login = (user, password) => {
  return new Promise((resolve, reject) => {
    pool.query('SELECT * FROM empleado WHERE login = "' + user + '" AND clave = "' + password + '"', (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    })
  })
}

module.exports = usersdb;
