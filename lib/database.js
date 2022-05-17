const MongoClient = require('mongodb').MongoClient;

class Database {
    constructor() {
      this.client = null;
      this.config = null;
    }
  
  /*
    DB Config JSON : 
    "database": {
      "url": "127.0.0.1",
      "port": 27017,
      "database": "test",
      "options": {
        "useNewUrlParser": true,
        "useUnifiedTopology": true,
        "poolSize": 10,
        "maxPoolSize": 20
      }
  
    }
  */
  
    // Expect config properties : database, url, port, and options - add un/pw later
    // options can contain "poolSize" and "maxPoolSize"
    configure = async (config) => {
      this.config = config;
  
      const url = `mongodb://${config.url}:${config.port}`;
      this.client = new MongoClient(url, config.options);
  
      await this.client.connect();
      return this.client;
    };
  
    getDb = () => {
      return this.client.db(this.config.database);
    }
  
    disconnect = async () => {
      return this.client.close();
    }
  }
  
  const db = new Database();
  
  module.exports = db;