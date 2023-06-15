const config = {
  db: {
    host: process.env.MYSQLHOST || "localhost",
    database: process.env.MYSQLDATABASE  || "ecom_api_db",
    user:  process.env.MYSQLUSER || "root",
    password:  process.env.MYSQLPASSWORD || "root",
    port:process.env.MYSQLPORT || 3306,
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
    idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0,
  },
  port: process.env.PORT || 30004
};


module.exports = config
