module.exports = {
  mongodb: {
    connector: 'mongodb',
    hostname: process.env.MONGO_PORT_6379_TCP_ADDR || 'localhost',
    port: process.env.MONGO_PORT_27017_TCP_PORT || 27017,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  }
};