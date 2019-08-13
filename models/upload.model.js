"use strict";

const mongoose = require('mongoose');

let uploadSchema = new mongoose.Schema ({
    filename: {
        type: String
    },
    originalName: {
        type: String
    },
    description: {
        type: String
    },
    employeeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee' 
    }
}, {timestamps: true});

module.exports = mongoose.model('Upload', uploadSchema);