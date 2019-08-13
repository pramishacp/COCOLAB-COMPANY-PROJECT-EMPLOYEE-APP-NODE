
"use strict";

const mongoose = require('mongoose');

let employeeSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true,
        unique: false
    },
    projects: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Project' 
    }],
    companyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company'
    },
    email: {
        type:String,
        trim:true,
        unique:true,
        required: true
    },
    phoneNumber: {
        type:Number,
        unique:true,
        required: true,
        minlength: 10,
        maxlength: 10
    }
}, {timestamps: true});

module.exports = mongoose.model('Employee', employeeSchema);