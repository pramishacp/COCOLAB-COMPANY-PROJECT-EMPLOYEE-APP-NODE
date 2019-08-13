"use strict";
const mongoose = require('mongoose');
const Project = require('../../models/project.model');

const projectUpdate = (req, res) => {
    Project.findById(req.params.id, (err, project) => {  
        if (err) {
            res.status(500).send(err);
        } else {
            // Update each attribute with any possible attribute that may have been submitted in the body of the request
            // If that attribute isn't in the request body, default back to whatever it was before.
            project.name = req.body.name || project.name;
            project.companyId = req.body.companyId || project.companyId;
            // Save the updated document back to the database
            project.save( (err, project) => {
                if (err) {
                    res.status(500).send(err)
                }
                res.status(200).send(project);
            }); 
        }
    });
}
module.exports = {
    projectUpdate : projectUpdate
}