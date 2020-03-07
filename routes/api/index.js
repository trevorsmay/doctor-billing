const router = require("express").Router();
const userRoutes = require("./userRoutes");
const patientDb = require("./patientDb");


router.use("/users", userRoutes);
router.use("/patient", patientDb);


module.exports = router;