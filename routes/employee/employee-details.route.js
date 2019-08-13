"use strict";

const mongoose = require('mongoose');
const Employee = require('../../models/employee.model');

const employeeDetails = (req, res) => {
    Employee.findById(req.params.id, (err, employee) => {
        if (err) {
            res.status(500).send(err);
            return;
        }
        if (employee) {
            res.status(200).send(employee)
        } else {
            res.status(404).send("No Employee found with that ID")
        }
    });
}
module.exports = {
    employeeDetails: employeeDetails
}