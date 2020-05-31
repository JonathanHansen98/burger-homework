const mysql = require('mysql')
const util = require('util')

const connection = mysql.createConnection({
  host: "y5s2h87f6ur56vae.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "o33i92682qjzwwg8",
  password: "yrsvod0jpsn8c3ff",
  database: "gxdu9tt1tby7xbtu"
});

connection.connect(function (error) {
  if (error) {
      throw error;
  }

  console.log(`Connected to database as id ${connection.threadId}`);
});

connection.query = util.promisify(connection.query);

module.exports = connection;


