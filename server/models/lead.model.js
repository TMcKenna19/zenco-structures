const mongoose = require('mongoose');

const LeadSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required"]
    },
    lastName: {
        type: String, 
        required: [true, "Last name is required"]
    },
    phoneNumber: {
        type: String,
        required: [true, "Phone number is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"]
    },
    propertyType: {
        type: String,
        required: [true, "Select Residentail or Commercial"]
    },
    surfaceLocation: {
        type: String,
        required: [true, "Interior, Exterior or Both"]
    },
    serviceRequested: {
        type: String,
        required: [true, "What service(s) are needed?"]
    },
    timeFrame: {
        type: String,
        required: [true, "How soon are you looking to have work done?"]
    },
    notes: {
        type: String
    },
    isCalled: { 
        type: Boolean
    } 

}, {timesstamps: true})

const Lead = mongoose.model("Lead", LeadSchema);

module.exports = Lead;

// Name: Zapp Brannigan
// Phone: 555.333.5335
// Email: doop@mail.com
// Property: Commercial
// Surface Location: Interior
// Service(s) Requested: Epoxy Floors, Industrial Coatings, Painting 
// Time Frame: Within 4 weeks  
// Notes: Boiler room floor is peeling. Pipes need repainted, Interior repaint is needed. 
// Called: No

