const router = require("express").Router();
const userRoutes = require("./userRoutes");
const patientDb = require("./patientDb");
// const procedureDb =require("./procedureDb");


router.use("/users", userRoutes);
router.use("/patients", patientDb);
// router.use("/procedures", procedureDb);



module.exports = router;