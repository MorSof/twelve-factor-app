const express = require('express');
const router = express.Router();
const service = require("../services/dbService")

/* GET home page. */
router.get('/', function (req, res, next) {
    return res.send("Hello World From Afeka College yay!!!");
});

/* GET all messages. */
router.get('/messages', async (req, res) => {
  const db_res = await service.getAllMessages()
  res.json(db_res);
});//

/* POST new message. */
router.post('/', async (req, res) => {
    try {
        const db_res = await service.addMessage(req)
        res.json(db_res);
    } catch (err) {
        console.error(err.message);
        res.json(err.message);
    }
});

module.exports = router;
