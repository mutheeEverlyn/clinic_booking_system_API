const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();

// Debugging environment variables
console.log(process.env.DB_HOST, process.env.DB_USER, process.env.DB_NAME);

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err.message);
    return;
  }
  console.log('MySQL Connected...');
});

module.exports = db;
