const config = {
  db: {
    host: $`{{MySQL.MYSQLHOST}}`    ,
    database: process.env.MYSQLDATABASE,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
  },
  port: process.env.MYSQLPORT,
};

module.exports = config;
