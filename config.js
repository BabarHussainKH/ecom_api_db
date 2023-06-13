const config = {
  db: {
    host: `${process.env.MYSQLHOST}`,
    database: `${process.env.MYSQLDATABASE}`,
    user: `${process.env.MYSQLUSER}`,
    password: `${process.env.MYSQLPASSWORD}`  
  },
  port:`${process.env.MYSQLPORT}`
}


module.exports = config
