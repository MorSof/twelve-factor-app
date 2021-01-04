const {TempFileData} = require('../db/temp');

async function getTempFiles(req, res) {
    const tempFiles = await TempFileData.find();
    return res.send(tempFiles)
}

async function addNewTempFile(req, res) {
    let tempFile = new TempFileData({name: req.body.name, message: req.body.message});
    try {
        tempFile = await tempFile.save();
        res.send(tempFile);
    } catch (err) {
        return res.status(400).send(err.message);
    }
}

async function deleteAllFiles(req, res) {
    await TempFileData.deleteMany().then(tempFiles => {
        res.send(tempFiles)
    }).catch(err => {
        res.status(404).send(err.message);
    });
}

module.exports = {
    getTempFiles: getTempFiles,
    addNewTempFile: addNewTempFile,
    deleteAllFiles: deleteAllFiles
}