const Lead = require("../models/lead.model");

// CREATE 
module.exports.createLead = (req, res) => {
    Lead.create(req.body)
    .then(newLead => res.json(newLead))
    .catch(err => res.json({message: "Error createLead", error: err}))
};

// READ ALL
module.exports.findAllLeads = (req, res) => {
    Lead.find()
    .then(allLeads => res.json(allLeads))
    .catch(err => res.json({message: "Error findAllLeads", error: err}))
};

// READ ONE 
module.exports.findOneLead = (req, res) => {
    Lead.find({_id: req.params._id})
    .then(oneLead => res.json(oneLead))
    .catch(err => res.json({message: "Error findOneLead", error: err}))
};

// UPDATE
module.exports.updateLead = (req, res) => {
    Lead.findOneAndUpdate({_id: req.params._id}, req.body, {new: true})
    .then(oneLead => res.json(oneLead))
    .catch(err => res.json({message: "Error updateLead", error: err}))
};

// DELETE
module.exports.deleteLead = (req, res) => {
    Lead.deleteOne({_id: req.params._id})
    .then(res.json({message: "Lead was successfully deleted"}))
    .catch(err => res.json({message: "Error deleteLead", error: err}))
};

// All controllers working 
