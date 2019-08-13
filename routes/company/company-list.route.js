"use strict";

const mongoose = require('mongoose')
const Company = require('../../models/company.model');

let companyList = (req, res) => {
    Company.find( (err, company) => {
        if (err) {
            res.status(500).send(err);
            return;
        } 
        if(company.length === 0){
            let company = new Company();
            company.name = 'ABC'
            company.save( (err, company) => {  
                if (err) {
                    res.status(500).send(err);
                    return;
                } 
                res.status(200).send(company);
            });
        } else {
            res.status(200).send(company);
        }    
    });
}

module.exports = {
    companyList: companyList
};

