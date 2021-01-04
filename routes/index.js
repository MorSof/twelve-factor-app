const tempFilesService = require('../services/tempService');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  return res.send("Hello World From Afeka College yay!");
});

router.get('/tempFiles', async function(req, res, next) {
  await tempFilesService.getTempFiles(req, res);
});

router.post('/', async function(req, res, next) {
  await tempFilesService.addNewTempFile(req, res);
});

router.delete('/', async (req, res) => {
  await tempFilesService.deleteAllFiles(req, res);
})

module.exports = router;
