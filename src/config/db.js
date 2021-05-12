const { Pool } = require('pg')

module.exports = new Pool({
    user: 'postgres',
    password: '558a5113',
    host: 'localhost',
    port: '5432',
    database: 'foodfy'
})