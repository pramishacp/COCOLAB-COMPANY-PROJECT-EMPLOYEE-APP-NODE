"use strict";

const mongoose = require('mongoose');
const Project = require('../../models/project.model');

const projectDelete = function(req, res) {
    Project.findByIdAndRemove(req.params.id, (err, project) => {  
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.status(200).send(project);
    });
}

module.exports = {
    projectDelete : projectDelete
};