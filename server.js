const config = require("./config");
const mysql = require("mysql2/promise");
// const mysql = require("mysql");
let connection;

const server = {
  getConnection: () => {
    if (!connection) connection = mysql.createConnection(config.db);
    return connection;
  },

  getPool: () => {
    return mysql.createPool(config.db);
  },
}

module.exports = server;
