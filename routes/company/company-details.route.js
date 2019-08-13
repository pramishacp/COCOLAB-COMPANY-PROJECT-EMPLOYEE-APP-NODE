"use strict";

const mongoose = require('mongoose');
const Company = require('../../models/company.model');

const companyDetails = (req, res) => {
    Company.findById(req.params.id, (err, company) => {
        if (err) {
            res.status(500).send(err);
            return;
        }
        if (company) {
            res.status(200).send(company)
        } else {
            res.status(404).send("No company found with that ID")
        }
    });
}

module.exports = {
    companyDetails : companyDetails
}