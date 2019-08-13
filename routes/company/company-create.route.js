"use strict";

const mongoose = require('mongoose');
const Company = require('../../models/company.model');

const companyCreate = (req, res) => {
    let company = new Company();
    company.name = req.body.name
    company.save( (err, company) => {  
        if (err) {
            res.status(500).send(err);
            return;
        } 
        res.status(200).send(company);
    });
}

module.exports = {
    companyCreate : companyCreate
}