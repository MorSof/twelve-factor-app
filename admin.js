const createTablesJson = require('./db/admin-db.json')
const pool = require('./db/postgres');

deleteAllTables = async () => {
    try{
        await pool.query("DROP TABLE IF EXISTS messages");
        return "Tables deleted successfully";
    }catch(err){
        console.error(err.message);
        return err.message;
    }
}

createAllTables = async () => {
    for (let key in createTablesJson) {
        try {
            await pool.query(createTablesJson[key]);
        } catch (err) {
            console.error(err.message);
            return err.message;
        }
    }
    console.log("Tables created successfully");
    return "Tables created successfully";
}

module.exports = {createAllTables, deleteAllTables};
