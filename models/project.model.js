
"use strict";

const mongoose = require('mongoose');

let projectSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true,
        unique: true
    },
    companyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company'
    },
    team: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Employee' 
    }],
}, {timestamps: true});

module.exports = mongoose.model('Project', projectSchema);