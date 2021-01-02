var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  return res.send("Hello World");
});

/* GET home page. */
router.get('/test', function(req, res, next) {
  return res.send("Hodi!!!!!");
});

module.exports = router;
