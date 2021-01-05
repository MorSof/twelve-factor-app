var express = require('express');
var router = express.Router();
const pool = require("../db/postgres");

/* GET home page. */
router.get('/', function(req, res, next) {
  return res.send("Hello World From Afeka College yay!!!");
});

/* POST new temp file. */
router.post('/', async (req, res, next) => {
  try {
    const db_res = (await pool.query(
        "INSERT INTO messages(name, message)\n" +
        "VALUES ($1, $2)\n" +
        "RETURNING *;\n", [req.body.name, req.body.message])).rows[0];
    res.json(db_res);
  }catch(err){
    console.error(err.message);
    res.json(err.message);
  }
});

module.exports = router;
