"use strict";
const Upload = require('../../models/upload.model');
const Employee = require('../../models/employee.model');

const uploadFile = (req, res) => {
    console.log('upload request called')
    // let newUpload = new Upload();
    // newUpload.filename = req.file.filename;
    // newUpload.originalName = req.file.originalname;
    // newUpload.description = 'Profile Picture';
    // newUpload.employeeId = req.body.employeeId;
    // newUpload.save(err => {
    //     if (err) {
    //         return res.sendStatus(400);
    //     }
    //     console.log('newUpload',newUpload)

    //     res.status(201).send({ newUpload });
    // });
    // req.file.employeeId = 
    console.log('sdasd',new Upload());
    req.file.employeeId = req.body.employeeId;
    console.log('asd',req.body, req.file)
    res.json({file: req.file})
}

module.exports = {
    uploadFile : uploadFile
}