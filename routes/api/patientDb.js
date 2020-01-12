const router = require("express").Router();
const db = require("../../models");

// patient search
// router.post("/")

router.put("/actpatient", function(req, res, next) {
    db.Procedure.create({_id: req.body.procedure},
        {
            patientId: req.body.patientId,
            total: req.body.total,
            cost: req.body.cost,
            qty: req.body.qty

        },
        res.json("Patient Information Update")
    ).catch((err) => {
        res.json(err);
    })
});

module.exports = router;
