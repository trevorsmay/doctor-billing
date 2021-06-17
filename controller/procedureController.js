const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.Procedure
        .find(req.query)
        .sort({ createdAt: -1 })
        .then( dbModel = res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findByID: function(req, res) {
        db.Procedure
        .findById(req.params.codeId)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        db.Procedure
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.Procedure
        .findOneAndUpdate({ _id: req.params.codeId }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.Procedure
        .findById({ _codeId: req.params.codeid })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
};