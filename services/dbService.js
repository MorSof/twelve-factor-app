const pool = require("../db/postgres");

async function getAllMessages() {
    return (await pool.query(
        "SELECT * FROM messages\n")).rows;
}

async function addMessage(req) {
    return (await pool.query(
        "INSERT INTO messages(name, message)\n" +
        "VALUES ($1, $2)\n" +
        "RETURNING *;\n", [req.body.name, req.body.message])).rows[0];
}

async function deleteAllMessages() {
    return ( await pool.query("DELETE FROM messages") );
}

module.exports = {
    addMessage: addMessage,
    getAllMessages: getAllMessages,
    deleteAllMessages: deleteAllMessages
}
