const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/doctor-billing"
);

 const procedureSeed = [
    {
        ptEval: "PT Evaluation",
        codeId: 97001,
        cost: 150,
        total: ""
    },
    {
        ptReEval: "PT Re evaluation",
        codeId: 97002,
        cost: 75,
        total: ""
    }

 ]

// ptReEval: {
//     codeId: String, //97002
//     cost: Number,
//     total: Number
// },    
// hotColdPack: {
//     codeId: String, //97010
//     cost: Number,
//     total: Number
// },
// mechanical: {
//     codeId: String, //97012
//     cost: Number,
//     total: Number
// },
// electricalStim: {
//     codeId: String, //0234,
//     cost: Number,
//     total: Number
// },
// electricalStimUatt: {
//     codeId: String, //97014,
//     cost: Number,
//     total: Number
// },
// fifteenElecStim: {
//     codeId: String, //97032,
//     cost: Number,
//     total: Number
// },
// iontopFifteen: {
//     codeId: String, //97033,
//     cost: Number,
//     total: Number
// },
// ultraSound: {
//     codeId: String,//97035,
//     cost: Number,
//     total: Number
// },
// gaitTraining: {
//     codeId: String,//97116,
//     cost: Number,
//     total: Number
// },
// hydrotherapy: {
//     codeId: String,// 97039,
//     cost: Number,
//     total: Number
// },
// manMusTest: {
//     codeId: String,//95833,
//     cost: Number,
//     total: Number
// },
// manTherapy: {
//     codeId: String,//97140,
//     cost: Number,
//     total: Number
// },
// neuroMuscReEd:{
//     codeId: String,//97112,
//     cost: Number ,
//     total: Number
// },
// orthoticCheck:{
//     codeId: String,//97762,
//     cost: Number,
//     total: Number
// },
// orthoticFitting: {
//     codeId: String,//97760,
//     cost: Number,
//     total: Number
// },
// orthoticSplint: {
//     codeId: String,// 3030,
//     cost: Number,
//     total: Number
// },
// motionTest: {
//     codeId: String,//95851,
//     cost: Number,
//     total: Number
// },
// selfCare: {
//     codeId: String,//97535,
//     cost: Number,
//     total: Number
// },
// tensEduc: {
//     codeId: String, //64550,
//     cost: Number,
//     total: Number
// },
// therapAct: {
//     codeId: String,//97530,
//     cost: Number,
//     total: Number
// },
// therapExr: {
//     codeId: String, //97110,
//     cost: Number,
//     total: Number
// },
// ball45: {
//     codeId: String,//002,
//     cost: Number,
//     total: Number
// },
// ball55: {
//     codeId: String,//003,
//     cost: Number,
//     total: Number
// },
// ball65: {
//     codeId: String,//004,
//     cost: Number,
//     total: Number
// },
// ball75: {
//     code: String, //005,
//     cost: Number,
//     total: Number
// },
// ball85: {
//     codeId: String,//006,
//     cost: Number,
//     total: Number
// },
// bioFreeze: {
//     codeId: String,//011,
//     cost: Number,
//     total: Number
// },
// brownTape: {
//     codeId: String,//020,
//     cost: Number,
//     total: Number
// },
// cervicalPillow: {
//     codeId: String,//010,
//     cost: Number,
//     total: Number
// },
// coldCervical: {
//     codeId: String,//017,
//     cost: Number,
//     total: Number
// },
// coldLumbar: {
//     codeId: String,//18,
//     cost: Number,
//     total: Number
// },
// electIontoSm: {
//     codeId: String,//025,
//     cost: Number,
//     total: Number
// },
// electIontoMd: {
//     codeId: String,//026,
//     cost: Number,
//     total: Number
// },
// electrods2:{
//     codeId: String,//013,
//     cost: Number,
//     total: Number
// },
// foamRollsSm: {
//     codeId: String,//027,
//     cost: Number,
//     total: Number
// },
// foamRollsLg: {
//     codeId: String,//28,
//     cost: Number,
//     total: Number
// },
// handPutty: {
//     codeId: String,//015,
//     cost: Number,
//     total: Number
// },
// heelLiR: {
//     codeId: String,//29,
//     cost: Number,
//     total: Number
// },
// iontophElect: {
//     codeId: String,//014,
//     cost: Number,
//     total: Number
// },
// lumbarChushion: {
//     codeId: String,//001,
//     cost: Number,
//     total: Number
// },
// ohPulley: {
//     codeId: String,//030,
//     cost: Number,
//     total: Number
// },
// theraband: {
//     codeId: String,//016,
//     cost: Number,
//     total: Number
// },
// theracane: {
//     codeId: String,//012,
//     cost: Number,
//     total: Number
// },
// theratubing: {
//     codeId: String,//033,
//     cost: Number,
//     total: Number
// },
// whiteTape: {
//     codeId: String,//034,
//     cost: Number,
//     total: Number
// },
// noShow: {
//     codeId: String,//99087,
//     cost: Number,
//     total: Number
// },
// cancelledAppt: {
//     codeId: String,//99083,
//     cost: Number,
//     total: Number
// }

});

// const  = new Procedure ({
//     ptEval: { codeId: "97001", cost: 75}
// })


db.Procedure
.remove({})
.then(() => db.Procedure.)
