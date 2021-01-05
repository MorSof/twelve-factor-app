const tempFilesService = require('../services/tempService');
var express = require('express');
var router = express.Router();
const pool = require("../db/postgres");


/* GET home page. */
router.get('/', function(req, res, next) {
  return res.send("Hello World From Afeka College yay!!");
});

/* GET temp files. */
// router.get('/tempFiles', async function(req, res, next) {
//   await tempFilesService.getTempFiles(req, res);
// });

/* POST new temp file. */
router.post('/', async (req, res, next) => {
  // await tempFilesService.addNewTempFile(req, res);
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

/* DELETE all temp files. */
// router.delete('/', async (req, res) => {
//   await tempFilesService.deleteAllFiles(req, res);
// })

module.exports = router;
