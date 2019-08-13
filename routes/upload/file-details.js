
const fs = require('fs');
const path = require('path');

const Upload = require('../../models/upload.model');

const uploadedDetails = (req, res, next) => {
    let imgId = req.params.id;
 
    Upload.findById('5d4fd3e6aa36a517d09473b7', (err, image) => {
        if (err) {
            res.sendStatus(400);
        }
        console.log('image',image)
        // stream the image back by loading the file

        // res.setHeader('Content-Type', 'image/jpeg');
        // fs.createReadStream(path.join('./uploads', image.filename)).pipe(res);
 
       
        res.download(`./uploads/${image.filename}`);    

    })
}

module.exports = {
    uploadedDetails : uploadedDetails
}