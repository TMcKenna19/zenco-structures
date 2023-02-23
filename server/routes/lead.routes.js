const LeadController = require("../controllers/lead.controller");


module.exports = app => {
    // create 
    app.post("/api/leads/create", LeadController.createLead);
   
    // read all 
    app.get("/api/leads", LeadController.findAllLeads);

    // read one 
    app.get("/api/leads/:_id", LeadController.findOneLead);

    // update
    app.put("/api/leads/update/:_id", LeadController.updateLead);

    // delete
    app.delete("/api/leads/delete/:_id", LeadController.deleteLead);
};

//All routes working 

