const mongoose = require('mongoose');
const config = require('config');

const tempSchema = new mongoose.Schema({
    name: String,
    message: String
}, {
    capped: { size: 1024 },
    bufferCommands: false,
    autoCreate: false // disable `autoCreate` since `bufferCommands` is false
});

const TempFileData = new mongoose.model('messages', tempSchema);

module.exports = {
    TempFileData:TempFileData
}


