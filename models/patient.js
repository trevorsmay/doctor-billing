const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const patientSchema = new Schema({

    patientNumber: {
        type: Number,
        unique: true,
        required: [true, "Patient ID is required."]
    },
    qty: {
        type: Number,
        unique: false,
        required: false
    },
    serviceCost: {
        type: Number
    },
    total: {
        type: Number
    },
    billStatus: {
        type: Boolean,
    },
});

const Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient;