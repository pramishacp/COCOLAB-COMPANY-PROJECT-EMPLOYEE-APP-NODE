"use strict";
const Upload = require('../../models/upload.model');

const config = require('../../config');
const gfs = require('../../server');
const mongoose = require('mongoose');

// mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`); // connect to our database

// /*gridfs-stream*/
 const Grid = require('gridfs-stream');
// Grid.mongo = mongoose.mongo;
// const conn = mongoose.connection;
// let gfs;
//  gfs = Grid(conn.name,  mongoose.mongo);



// conn.once('open', function () {
//     console.log('open 2');
//     gfs = Grid(conn.db, mongoose.mongo);
    
// });

const listUploads = (req, res) => {
    console.log('hai hello',GLOBAL.a)
    gfs.collection('uploads');
    gfs.files.find().toArray( (err, files) => {
        console.log('the files',files)
        if(!files || files.length === 0){
            return res.status(404).json({
                responseCode: 1,
                responseMessage: "No files exist."
            });
        }
        console.log(files);
        return res.json(files); 
    })
}

module.exports = {
    listUploads: listUploads
}