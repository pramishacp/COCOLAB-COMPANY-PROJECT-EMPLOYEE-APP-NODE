"use strict";
const mongoose = require('mongoose');
const Project = require('../../models/project.model');

const projectCreate = (req, res) => {
    
    let project = new Project({
        name: req.body.name,
        companyId: req.body.companyId
    });

    project.save( (err, project) => {  
        if (err) {
            res.status(500).send(err);
            return;
        } 
        res.status(200).send(project);
    });

}
module.exports = {
    projectCreate : projectCreate
}