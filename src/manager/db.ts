import pg from 'pg';

class DatabaseManager {
  public static instance: DatabaseManager = new this();


  public static getInstance() {
     if (!this.instance) throw new Error('Connect the instance first');

    return this.instance;
  }
  
  public async connect() {
    try {
      const { Pool } = pg;
      return new Pool({
        user: 'htide',
        host: 'localhost',
        database: 'canbarris',
        password: 'password',
        port: 5432,
      });
    } catch(error: any) {
      throw new Error('Unable to connect to the database:', error);
    }
  }
}

export default DatabaseManager;