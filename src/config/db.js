const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    //port: process.env.DB_PORT,
    user: 'root',
    database: 'estagio',
   // password: process.env.DB_PASSWORD,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  });

  module.exports = pool;