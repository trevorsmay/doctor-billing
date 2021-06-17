const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const patientsSchema = new Schema({

    patientNumber: {
        type: Number,
        unique: true,
        // required: [true]
    },
    fee: {
        type: Number
    }

    // billStatus: {
    //     type: Boolean,
    // },
    // qty: {
    //     type: Number,
    //     unique: false,
    //     required: false
    // },
    // total: {
    //     type: Number
    // },
    // procedure: {
    //     pEval: {
    //         code: String,
    //         fee: Number,
    //         qty: Number,
    //         val: Number
    //     }
    // }
});

const Patient = mongoose.model("Patient", patientsSchema);

module.exports = Patient;