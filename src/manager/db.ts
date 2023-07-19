// HOW TO DO A SINGLETON IN TYPESCRIPT
import pg from 'pg';

const { Pool } = pg;
const pool = new Pool({
  user: 'htide',
  host: 'localhost',
  database: 'canbarris',
  password: 'password',
  port: 5432,
})

export default pool;