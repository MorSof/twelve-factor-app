const mongoose = require('mongoose');

const tempSchema = new mongoose.Schema({
    name: String,
    message: String
});

const TempFileData = new mongoose.model('messages', tempSchema);

module.exports = {
    TempFileData:TempFileData
};
