const mysql = require('mysql')
const util = require('util')

const connection = mysql.createConnection({
  host: "127.0.0.1",
  port: 3306,
  user: "root",
  password: "password1",
  database: "burger_db"
});

connection.connect(function (error) {
  if (error) {
      throw error;
  }

  console.log(`Connected to database as id ${connection.threadId}`);
});

connection.query = util.promisify(connection.query);

module.exports = connection;


