const { Pool } = require('pg');
const { user, host, password, database, port} = require('../secrets/db_configuration');

const pool = new Pool({ user, host, database, password, port });

module.exports = pool;