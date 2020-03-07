const router = require("express").Router();
const patientController = require("../../controller/patientController");


router
.route("/")
.get(patientController.findAll)
.post(patientController.create)

router
.route("/:id")
.get(patientController.findById)
.put(patientController.update)
.delete(patientController.remove)


module.exports = router;
