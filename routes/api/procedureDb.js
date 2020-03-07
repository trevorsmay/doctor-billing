const router = require("express").Router();
const procedureController = require("../../controller/procedureController");

router
.route("/")
.get(procedureController.findAll)
.post(procedureController.create)

router
.route("/:id")
.get(procedureController.findById)
.put(procedureController.update)
.delete(procedureController.remove)

module.exports = router;