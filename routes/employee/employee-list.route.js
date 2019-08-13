"use strict";

const mongoose = require('mongoose');
const Employee = require('../../models/employee.model');

let employeeList = (req, res) => {
    Employee.find()
        .populate('companyId')
        .populate('projects')
        .exec((err, employees) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(employees);
            }
        })
}

module.exports = {
    employeeList: employeeList
};

