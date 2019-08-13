"use strict";
const mongoose = require('mongoose');
const Employee = require('../../models/employee.model');
const Project = require('../../models/project.model');

const employeeUpdate = (req, res) => {
    Employee.findById(req.params.id, (err, employee) => {
        if (err) {
            res.status(500).send(err);
        } else {
            // Update each attribute with any possible attribute that may have been submitted in the body of the request
            // If that attribute isn't in the request body, default back to whatever it was before.
            employee.name = req.body.name || employee.name;
            employee.companyID = req.body.companyId || employee.companyId;
            employee.email = req.body.email || employee.email;
            employee.phoneNumber = req.body.phoneNumber || employee.phoneNumber;
            req.body.EmployeeProjects.map(project => {
                employee.projects.push(project)
            })

            async function saveEmployeeIntoDB() {
                try {
                    const employee = await saveEmployee();
                    const projectTeam = await updateProjectDB(employee._id);
                    res.status(200).send(employee)
                } catch (err) {
                    console.log('Error', err.message);
                }
            }
            saveEmployeeIntoDB();

            function saveEmployee() {
                return new Promise((resolve, reject) => {
                    employee.save((err, employee) => {
                        if (err) {
                            res.status(500).send(err)
                        }
                        resolve(employee);
                    });
                });
            }

            function updateProjectDB(empId) {
                return new Promise((resolve, reject) => {
                    Project.updateMany({ '_id': { $in: employee.projects } }, { $set: { 'team': empId } }, function (err, docs) {
                        resolve(empId);
                    })
                });
            }

        }
    });
}
module.exports = {
    employeeUpdate: employeeUpdate
}