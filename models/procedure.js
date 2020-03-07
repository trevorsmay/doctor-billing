const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const procedureSchema = new Schema({
procedure: {    
ptEval:{ 
    code: String,
    cost: Number,
    total: Number
},
ptReEval: {
    code: String,
    cost: Number,
    total: Number
},    
hotColdPack: {
    code: String,
    cost: Number,
    total: Number
},
mechanical: {
    code: String,
    cost: Number,
    total: Number
},
electricalStim: {
    code: String,
    cost: Number,
    total: Number
},
electricalStimUatt: {
    code: String,
    cost: Number,
    total: Number
},
fifteenElecStim: {
    code:String,
    cost: Number,
    total: Number
},
iontopFifteen: {
    code: String,
    cost: Number,
    total: Number
},
ultraSound: {
    code: String,
    cost: Number,
    total: Number
},
gaitTraining: {
    code: String,
    cost: Number,
    total: Number
},
hydrotherapy: {
    code: String,
    cost: Number,
    total: Number
},
manMusTest: {
    code: String,
    cost: Number,
    total: Number
},
manTherapy: {
    code: String,
    cost: Number,
    total: Number
},
neuroMuscReEd:{
    code: String,
    cost: Number ,
    total: Number
},
orthoticCheck:{
    code: String,
    cost: Number,
    total: Number
},
orthoticFitting: {
    code: String,
    cost: Number,
    total: Number
},
orthoticSplint: {
    code: String,
    cost: Number ,
    total: Number
},
motionTest: {
    code: String,
    cost: Number,
    total: Number
},
selfCare: {
    code: String,
    cost: Number,
    total: Number
},
tensEduc: {
    code: String,
    cost: Number,
    total: Number
},
therapAct: {
    code: String,
    cost: Number,
    total: Number
},
therapExr: {
    code: String,
    cost: Number,
    total: Number
},
ball45: {
    code: String,
    cost: Number,
    total: Number
},
ball55: {
    code: String,
    cost: Number,
    total: Number
},
ball65: {
    code: String,
    cost: Number,
    total: Number
},
ball75: {
    code: String,
    cost: Number,
    total: Number
},
ball85: {
    code: String,
    cost: Number,
    total: Number
},
bioFreeze: {
    code: String,
    cost: Number,
    total: Number
},
brownTape: {
    code: String,
    cost: Number,
    total: Number
},
cervicalPillow: {
    code: String,
    cost: Number,
    total: Number
},
coldCervical: {
    code: String,
    cost: Number,
    total: Number
},
coldLumbar: {
    code: String,
    cost: Number,
    total: Number
},
electIontoSm: {
    code: String,
    cost: Number,
    total: Number
},
electIontoMd: {
    code: String,
    cost: Number,
    total: Number
},
electrods2:{
    code: String,
    cost: Number,
    total: Number
},
foamRollsSm: {
    code: String,
    cost: Number,
    total: Number
},
foamRollsLg: {
    code: String,
    cost: Number,
    total: Number
},
handPutty: {
    code: String,
    cost: Number,
    total: Number
},
heelLiR: {
    code: String,
    cost: Number,
    total: Number
},
iontophElect: {
    code: String,
    cost: Number,
    total: Number
},
lumbarChushion: {
    code: String,
    cost: Number,
    total: Number
},
ohPulley: {
    code: String,
    cost: Number,
    total: Number
},
theraband: {
    code: String,
    cost: Number,
    total: Number
},
theracane: {
    code: String,
    cost: Number,
    total: Number
},
theratubing: {
    code: String,
    cost: Number,
    total: Number
},
whiteTape: {
    code: String,
    cost: Number,
    total: Number
},
noShow: {
    code: String,
    cost: Number,
    total: Number
},
cancelledAppt: {
    code: String,
    cost: Number,
    total: Number
}
}
});
const Procedure = mongoose.model("Procedure", procedureSchema);

module.exports = Procedure;