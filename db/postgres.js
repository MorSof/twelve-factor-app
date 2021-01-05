const config = require('config');
const Pool = require("pg").Pool

const pool = new Pool({
    user: "postgres",
    password: "jCzMzrb0EPd0hYchFB96KwtCZkwlJvexcK3W5Qni",
    database: "cloud-computing",
    host: "45.55.46.246",
    port: 5432
})

module.exports = pool;
