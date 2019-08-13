"use strict";

const express = require('express');
const router = express.Router();

const config = require('./config');

/*multer-gridfs-storage*/
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const crypto = require('crypto');
const path = require('path');
const storage = new GridFsStorage({
  url: `mongodb://${config.db.host}:${config.db.port}/${config.db.name}`,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString('hex') + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          metadata: req.body,
          bucketName: 'uploads'
        };
        resolve(fileInfo);
      });
    });
  }
});
const upload = multer({ storage });
/*multer-gridfs-storage*/

router.post('/company', require('./routes/company/company-create.route').companyCreate);
router.get('/company', require('./routes/company/company-list.route').companyList);
router.get('/company/:id', require('./routes/company/company-details.route').companyDetails);
router.put('/company/:id', require('./routes/company/company-update.route').companyUpdate);
router.delete('/company/:id', require('./routes/company/company-delete.route').companyDelete);

router.post('/project', require('./routes/project/project-create.route').projectCreate);
router.get('/project', require('./routes/project/project-list.route').projectList);
router.get('/project/:id', require('./routes/project/project-details.route').projectDetails);
router.put('/project/:id', require('./routes/project/project-update.route').projectUpdate);
router.delete('/project/:id', require('./routes/project/project-delete.route').projectDelete);

router.post('/employee', require('./routes/employee/employee-create.route').employeeCreate);
router.get('/employee', require('./routes/employee/employee-list.route').employeeList);
router.get('/employee/:id', require('./routes/employee/employee-details.route').employeeDetails);
router.put('/employee/:id', require('./routes/employee/employee-update.route').employeeUpdate);
router.delete('/employee/:id', require('./routes/employee/employee-delete.route').employeeDelete);


router.post('/uploads', upload.single('photo'), require('./routes/upload/file-upload.route').uploadFile);

// router.post('/uploads', require('./routes/upload/file-upload.route').uploadFile);
// router.get('/uploads',  require('./routes/upload/file-list').listUploads);
// router.get('/uploads/:id', require('./routes/upload/file-details').uploadedDetails);
router.delete('/uploads/:id', require('./routes/upload/file-delete').deleteUploaded);

module.exports = router;