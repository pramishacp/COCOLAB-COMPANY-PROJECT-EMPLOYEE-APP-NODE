"use strict";
const mongoose = require('mongoose');
const Employee = require('../../models/employee.model');

const employeeCreate = (req, res) => {
    
    let employee = new Employee({
        name: req.body.name,
        companyId: req.body.companyId,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber
    });

    employee.save( (err, employee) => {  
        if (err) {
            res.status(500).send(err);
            return;
        } 
        res.status(200).send(employee); 
    });

}
module.exports = {
    employeeCreate : employeeCreate
}