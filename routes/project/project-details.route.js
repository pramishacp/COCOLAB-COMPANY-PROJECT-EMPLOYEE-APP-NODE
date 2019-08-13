"use strict";

const mongoose = require('mongoose');
const Project = require('../../models/project.model');

const projectDetails = (req, res) => {
    Project.findById(req.params.id, (err, project) => {
        if (err) {
            res.status(500).send(err);
            return;
        }
        if (project) {
            res.status(200).send(project)
        } else {
            res.status(404).send("No project found with that ID")
        }
    });
}
module.exports = {
    projectDetails : projectDetails
}