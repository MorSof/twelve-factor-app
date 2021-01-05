const config = require('config');
const Pool = require("pg").Pool

const pool = new Pool({
    user: "postgres",
    password: "jCzMzrb0EPd0hYchFB96KwtCZkwlJvexcK3W5Qni",
    database: "cloud-computing",
    host: "35.202.192.26",
    port: 5432
})

module.exports = pool;
