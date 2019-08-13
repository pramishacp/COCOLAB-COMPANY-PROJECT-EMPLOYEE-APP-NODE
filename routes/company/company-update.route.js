"use strict";

const mongoose = require('mongoose');
const Company = require('../../models/company.model');

const companyUpdate = (req, res) => {
    Company.findById(req.params.id, (err, company) => {  
        if (err) {
            res.status(500).send(err);
        } else {
            company.name = req.body.name || company.name; // Update each attribute with any possible attribute that may have been submitted in the body of the request
            // If that attribute isn't in the request body, default back to whatever it was before.
            // Save the updated document back to the database
            company.save( (err, company) => {
                if (err) {
                    res.status(500).send(err);
                    return;
                }
                res.status(200).send(company);
            }); 
        }
    });
}

module.exports = {
    companyUpdate : companyUpdate
}