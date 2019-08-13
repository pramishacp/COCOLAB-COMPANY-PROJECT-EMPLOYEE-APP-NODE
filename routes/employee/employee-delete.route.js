"use strict";

const mongoose = require('mongoose');
const Employee = require('../../models/employee.model');

const employeeDelete = function (req, res) {
    Employee.findByIdAndRemove(req.params.id, (err, employee) => {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.status(200).send(employee);
    });
}

module.exports = {
    employeeDelete: employeeDelete
};