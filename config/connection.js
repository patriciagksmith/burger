// Set up MySQL connection.
var mysql = require("mysql");
var connection;


 if (process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
  } else {
connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Webdsnr62",
  database: "burgers_db"
  });
};
// Make connection.
connection.connect();
module.exports = connection;