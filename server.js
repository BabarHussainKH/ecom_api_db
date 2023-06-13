const config = require("./config");
const mysql = require("mysql");
let connection;

const server = {
  getConnection: () => {
    if (!connection) connection = mysql.createConnection(config.db);
    return connection;
  },
};

module.exports = server;
