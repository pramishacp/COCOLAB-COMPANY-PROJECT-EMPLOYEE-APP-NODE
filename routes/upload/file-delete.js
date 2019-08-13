"use strict";
const del = require('del');
const path = require('path');

const Upload = require('../../models/upload.model');

const deleteUploaded = (req, res, next) => {
    // Create a new image model and fill the properties
    let imgId = req.params.id;
 
    Upload.findByIdAndRemove(imgId, (err, image) => {
        if (err && image) {
            res.sendStatus(400);
        }
    
        del([path.join('./uploads', image.filename)]).then(deleted => {
            res.sendStatus(200);
        })
    })
}

module.exports = {
    deleteUploaded : deleteUploaded
}