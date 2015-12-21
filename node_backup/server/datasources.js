module.exports = {
  towdb: {
    name: 'towdb',
    connector: 'mongodb',
    hostname: process.env.MONGO_PORT_6379_TCP_ADDR || 'localhost',
    port: process.env.MONGO_PORT_27017_TCP_PORT || 27017
  }
};