const mySQL = require("mysql2");

const pool = mySQL.createPool({
  host: "localhost",
  user: "root",
  database: "sys",
  password: "Tt-121212",
});
module.exports.pool = pool.promise();
