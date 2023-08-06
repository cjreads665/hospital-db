//config file for mysql

import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config();
/**
 * when opening a connection, we will open a pool of connections
 * everytime a request comes, we will look into that pool and grab an open connection
 * perform the db query
 * release the connection back to the pool
 */
/**
 * for gpt
 * A connection pool is a set of pre-established database connections that are kept ready and available for reuse. 
 * Instead of creating a new database connection every time the application needs to interact with the database, the connection pool allows 
 * the application to grab an existing connection from the pool. After the interaction is complete, the connection is released back into the pool for future use.
 * The primary purpose of using connection pools is to efficiently manage and reuse database connections. Instead of creating a new database connection for every individual database operation, a
 * connection pool maintains a pool of established connections that can be reused multiple times. This reuse significantly reduces the overhead of establishing new connections for each request 
 * and improves the application's performance and scalability.
 */

/**
 * we are creating multiple connections(pool) because
 * By using multiple connections, your application can handle multiple concurrent requests efficiently
   without waiting for one request to finish before processing the next one.
 * your application may need to perform multiple operations simultaneously, such as executing multiple
   queries or interacting with different databases or database servers. 
   Each operation can have its own dedicated connection to ensure efficient execution and isolation.
 * for sharding
 */

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  name: process.env.DB_NAME,
  connectionLimit: process.env.DB_CONNECTION_LIMIT,
});

export default pool;

/**
 * it may happen that all the connections to our mysql db are being used. in that case,
   mysql will take those extra connections and put them in a queue.
   we can also get an error if we the number connections exceed the connections in the pool
   and the connection queue

   from gpt:
   To handle situations where the connection queue is regularly being overwhelmed, you can consider adjusting the queue size or scaling your server infrastructure to handle a higher number of concurrent connections. Additionally, optimizing the performance of your application and database can help reduce the number of idle connections and improve the overall efficiency of connection handling.
   
 */
