"use strict";

const mongoose = require('mongoose');
const Project = require('../../models/project.model');

let projectList = (req, res) => {
    Project.find()
        .populate('companyId')
        .populate('team')
        .exec((err, projects) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(projects);
            }
        })
}



module.exports = {
    projectList: projectList
};

