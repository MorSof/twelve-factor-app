const express = require('express');
const router = express.Router();
const service = require("../services/dbService")

/* GET home page. */
router.get('/', function (req, res, next) {
    return res.send("Hello World From Mor");
});

//"There are any questions?"
/* GET all messages. */
router.get('/messages', async (req, res) => {
    try {
        const db_res = await service.getAllMessages()
        res.json(db_res);
    } catch (err) {
        console.error(err.message);
        res.json(err.message);
    }

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

/* DELETE all messages. */
router.delete('/', async (req, res) => {
    try {
        await service.deleteAllMessages();
        res.send("All DB is deleted!");
    } catch (err) {
        console.error(err.message);
        res.json(err.message);
    }
});//

module.exports = router;
