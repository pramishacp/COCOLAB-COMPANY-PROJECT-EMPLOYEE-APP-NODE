const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const router = require('./routes');
const config = require('./config');

mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`); // connect to our database

/*gridfs-stream*/
const Grid = require('gridfs-stream');
Grid.mongo = mongoose.mongo;
const conn = mongoose.connection;
let gfs;
conn.once('open', function () {
     gfs = Grid(conn.db, mongoose.mongo);
     gfs.collection('uploads');
});
/*gridfs-stream*/



const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', router);

app.get('/uploads', (req, res) => {
    gfs.files.find().toArray( (err, files) => {
        if(!files || files.length === 0){
            return res.status(404).json({
                responseMessage: "No files exist."
            });
        } 
        res.send(files);
        // else {
        //     files.map( file => {   
        //         if (file.contentType === 'image/jpeg' || file.contentType === 'image/png') {
        //         // Read output to browser
        //          file.isImage = true;
        //         } else {
        //          file.isImage = false;
        //         }
        //     });
        //     return res.send({files: files});   
        // } 
    })
})

app.get('/uploads/:employeeId', (req, res) => {
    gfs.files.findOne({ 'metadata.employeeId': req.params.employeeId}, (err, file) => {
        if (!file || file.length === 0) {
            return res.status(404).json({
                responseMessage: "No file exists."
            });
        }
        const readstream = gfs.createReadStream(file.filename)
        // res.set('Content-Type', file.contentType);
        return readstream.pipe(res);
        // return res.send(file)
        // Check if image
        // if (file.contentType === 'image/jpeg' || file.contentType === 'image/png') {
            // Read output to browser
            // const readstream = gfs.createReadStream(file.filename);
            // readstream.pipe(res);
        // } else {
        //     res.status(404).json({
        //         err: 'Not an image'
        //     });
        // }
    });
})

app.listen(config.app.port, () => {
    console.log(`the application is listening on port ${config.app.port}`);
})
