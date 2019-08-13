"use strict";

const mongoose = require('mongoose');
const Company = require('../../models/company.model');

const companyDelete = function(req, res) {
    Company.findByIdAndRemove(req.params.id, (err, company) => {  
        if (err) {
            res.status(500).send(err); 
            return;
        }
        res.status(200).send(company);
    });
}

module.exports = {
    companyDelete : companyDelete
};