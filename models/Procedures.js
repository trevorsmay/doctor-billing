const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const proceduresSchema = new Schema({

    patientId: {
        type: Number,
        unique: true,
        required: [true, "Patient ID is required."]
    },

    qty: {
        type: Number,
        unique: false,
        required: false
    },

    cost: {
        type: Number
    },

    total: {
        type: Number
    }

});

const Procedure = mongoose.model("Procedure", proceduresSchema);

module.exports = Procedure;