const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "password",
  database: "postgres",
  port: "5432",
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
  end: () => {
    pool.end();
  },
};



// const { Client } = require('pg')

// let client = null
// async function get_db() {
//     if (client !== null) {
//         return client
//     }

//     client = new Client({ connectionString: process.env.DATABASE_URL })

//     await client.connect()

//     return client
// }

// module.exports = get_db

// const Pool = require('pg').Pool;

// const pool = new Pool({
//   user: 'postgres',
//   password: 'password',
//   host: 'localhost',
//   port: 5432,
//   database: 'postgres'
// });

// module.exports = pool;

// const pool = new Pool({
//   user: process.env."PGUSER",
//   password: process.env."PGPASSWORD",
//   host: process.env.PGHOST,
//   port: process.env.PGPORT,
//   database: process.env.PGDATABASE,
// });