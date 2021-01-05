const tempFilesService = require('../services/tempService');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  return res.send("Hello World From Afeka College yay!!");
});

/* GET temp files. */
router.get('/tempFiles', async function(req, res, next) {
  await tempFilesService.getTempFiles(req, res);
});

/* POST new temp file. */
router.post('/', async (req, res, next) => {
  await tempFilesService.addNewTempFile(req, res);
});

/* DELETE all temp files. */
router.delete('/', async (req, res) => {
  await tempFilesService.deleteAllFiles(req, res);
})

module.exports = router;
