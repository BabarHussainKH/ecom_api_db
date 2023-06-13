const config = {
  db: {
    host: `${MYSQLHOST}`    ,
    database: `${MYSQLDATABASE}`,
    user: `${MYSQLUSER}`,
    password: `${MYSQLPASSWORD}`,
  },
  port: `${MYSQLPORT}`,
};

module.exports = config;
