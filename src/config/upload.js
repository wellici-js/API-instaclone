const multer = require('multer');
const path = require('path');

module.exports = {
    storage: new multer.diskStorage({
        destination: path.resolve(__dirname, '..','..','uploads'),
        filename: function(req, file, cb) {
            // Recebe um callback, onde o primeiro parametro é algum  erro e o segundo é o nome do arquivo
            cb(null, file.originalname);
        }
    })
}