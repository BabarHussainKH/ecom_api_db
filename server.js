const config = require("./config");
const mysql = require("mysql");
let connection;

const server = {
  getConnection: () => {
    if (!connection) connection = mysql.createConnection({
      host: process.env.MYSQLHOST,
      database: process.env.MYSQLDATABASE,
      user: process.env.MYSQLUSER,
      password: process.env.MYSQLPASSWORD,
    });
    return connection;
  },
};

module.exports = server;
