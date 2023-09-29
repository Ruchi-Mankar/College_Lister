const mysql = require('mysql2');

const dbConfig = {
  host: 'localhost',
  user: 'ruchi',
  password: 'KIM samuel',
  database: 'IT_colleges', // Change this to your actual database name
};

const pool = mysql.createPool(dbConfig);

module.exports = pool.promise();
