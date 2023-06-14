const config = {
  db: {
    host: process.env.MYSQLHOST || "localhost",
    database: process.env.MYSQLDATABASE  || "ecom_api_db",
    user:  process.env.MYSQLUSER || "root",
    password:  process.env.MYSQLPASSWORD || "root",
    port:process.env.MYSQLPORT || 3306
  },
  port: process.env.PORT || 30004
};


module.exports = config
