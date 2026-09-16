const mongoose = require("mongoose");

const LeadSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: [true, "First name is required"],
            trim: true
        },

        lastName: {
            type: String,
            required: [true, "Last name is required"],
            trim: true
        },

        phoneNumber: {
            type: String,
            required: [true, "Phone number is required"],
            trim: true
        },

        email: {
            type: String,
            required: [true, "Email is required"],
            trim: true,
            lowercase: true
        },

        propertyType: {
            type: String,
            required: [true, "Select Residential or Commercial"],
            enum: {
                values: ["Residential", "Commercial"],
                message: "Please select Residential or Commercial"
            }
        },

        surfaceLocation: {
            type: String,
            required: [true, "Select Interior, Exterior, or Interior & Exterior"],
            enum: {
                values: ["Interior", "Exterior", "Interior & Exterior"],
                message: "Please select Interior, Exterior, or Interior & Exterior"
            }
        },

        serviceRequested: {
            type: [String],
            required: [true, "What service is needed?"],
            trim: true
        },

        timeFrame: {
            type: String,
            required: [true, "How soon are you looking to have work done?"],
            enum: {
                values: [
                    "As soon as possible",
                    "Within 1 month",
                    "1–3 months",
                    "3+ months",
                    "Just getting estimates"
                ],
                message: "Please select a time frame"
            }
        },

        notes: {
            type: String,
            trim: true
        },

        isCalled: {
            type: Boolean,
            default: false
        }
    },
    { timestamps: true }
);

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

