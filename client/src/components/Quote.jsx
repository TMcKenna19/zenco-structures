import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import NavBar from "./NavBar";
import modernHouse from "../Images/modernHouse.jpg";


const Quote = props => {

    const navigate = useNavigate();
    const [formErrors, setFormErrors] = useState({});
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        propertyType: "",
        surfaceLocation: "",
        serviceRequested: [],
        timeFrame: "",
        notes: "",
        isCalled: false
        
    });

    const changeHandler = e => {
        setFormData({...formData, [e.target.name]: e.target.value})
    };

    // Handles check boxes on form 
    const serviceChangeHandler = (e) => {
        const { value, checked } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            serviceRequested: checked
                ? [...prevFormData.serviceRequested, value]
                : prevFormData.serviceRequested.filter(
                    (service) => service !== value
                )
        }));
    };

    const submitHandler = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/leads/create", formData)
        .then(res => {
            if(res.data.error) {
                console.log("error: form submit missing data feild(s)")
                setFormErrors(res.data.error.errors)
            }else {
                console.log("form submit successful")
                navigate("/thankyou")
            }
        })
        .catch(err => console.log(err))
    };

    return(
        <>
        <NavBar/>
        <div className="quote-hero">
            <div className="quote-hero-image">
                <img src={modernHouse} alt="really nice house" />
            </div>
            <div className="quote-hero-copy">
                <p>Request a Free Quote</p>
            </div>
        </div>
        <form onSubmit={submitHandler} className="quote-form-wrapper">
            <div className="quote-form">

                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        className="form-control"
                        value={formData.firstName}
                        onChange={changeHandler}
                    />
                    {formErrors.firstName && (
                        <p className="text-danger">
                            {formErrors.firstName.message}
                        </p>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        className="form-control"
                        value={formData.lastName}
                        onChange={changeHandler}
                    />
                    {formErrors.lastName && (
                        <p className="text-danger">
                            {formErrors.lastName.message}
                        </p>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="phoneNumber">Phone</label>
                    <input
                        type="tel"
                        name="phoneNumber"
                        id="phoneNumber"
                        className="form-control"
                        value={formData.phoneNumber}
                        onChange={changeHandler}
                    />
                    {formErrors.phoneNumber && (
                        <p className="text-danger">
                            {formErrors.phoneNumber.message}
                        </p>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="form-control"
                        value={formData.email}
                        onChange={changeHandler}
                    />
                    {formErrors.email && (
                        <p className="text-danger">
                            {formErrors.email.message}
                        </p>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="propertyType">Property Type</label>
                    <select
                        name="propertyType"
                        id="propertyType"
                        className="form-control"
                        value={formData.propertyType}
                        onChange={changeHandler}
                    >
                        <option value="">Select Property Type</option>
                        <option value="Residential">Residential</option>
                        <option value="Commercial">Commercial</option>
                    </select>

                    {formErrors.propertyType && (
                        <p className="text-danger">
                            {formErrors.propertyType.message}
                        </p>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="surfaceLocation">Surface Location</label>
                    <select
                        name="surfaceLocation"
                        id="surfaceLocation"
                        className="form-control"
                        value={formData.surfaceLocation}
                        onChange={changeHandler}
                    >
                        <option value="">Select Surface Location</option>
                        <option value="Interior">Interior</option>
                        <option value="Exterior">Exterior</option>
                        <option value="Interior & Exterior">Interior & Exterior</option>
                    </select>

                    {formErrors.surfaceLocation && (
                        <p className="text-danger">
                            {formErrors.surfaceLocation.message}
                        </p>
                    )}
                </div>

                <div className="form-group form-group-full">
                    <label>Services Requested:</label>

                    <div className="checkbox-group">

                        <label className="checkbox-option">
                            <input
                                type="checkbox"
                                name="serviceRequested"
                                value="Interior Painting"
                                checked={formData.serviceRequested.includes(
                                    "Interior Painting"
                                )}
                                onChange={serviceChangeHandler}
                            />
                            Interior Painting
                        </label>

                        <label className="checkbox-option">
                            <input
                                type="checkbox"
                                name="serviceRequested"
                                value="Exterior Painting"
                                checked={formData.serviceRequested.includes(
                                    "Exterior Painting"
                                )}
                                onChange={serviceChangeHandler}
                            />
                            Exterior Painting
                        </label>

                        <label className="checkbox-option">
                            <input
                                type="checkbox"
                                name="serviceRequested"
                                value="Cabinet Painting"
                                checked={formData.serviceRequested.includes(
                                    "Cabinet Painting"
                                )}
                                onChange={serviceChangeHandler}
                            />
                            Cabinet Painting
                        </label>

                        <label className="checkbox-option">
                            <input
                                type="checkbox"
                                name="serviceRequested"
                                value="Deck / Fence Staining"
                                checked={formData.serviceRequested.includes(
                                    "Deck / Fence Staining"
                                )}
                                onChange={serviceChangeHandler}
                            />
                            Deck / Fence Staining
                        </label>

                        <label className="checkbox-option">
                            <input
                                type="checkbox"
                                name="serviceRequested"
                                value="Drywall Repair"
                                checked={formData.serviceRequested.includes(
                                    "Drywall Repair"
                                )}
                                onChange={serviceChangeHandler}
                            />
                            Drywall Repair
                        </label>

                        <label className="checkbox-option">
                            <input
                                type="checkbox"
                                name="serviceRequested"
                                value="Garage Floor"
                                checked={formData.serviceRequested.includes(
                                    "Garage Floor"
                                )}
                                onChange={serviceChangeHandler}
                            />
                            Garage Floor
                        </label>

                        <label className="checkbox-option">
                            <input
                                type="checkbox"
                                name="serviceRequested"
                                value="Lead Removal"
                                checked={formData.serviceRequested.includes(
                                    "Lead Removal"
                                )}
                                onChange={serviceChangeHandler}
                            />
                            Lead Removal
                        </label>

                    </div>

                    {formErrors.serviceRequested && (
                        <p className="text-danger">
                            {formErrors.serviceRequested.message}
                        </p>
                    )}
                </div>

                <div className="form-group form-group-full">
                    <label htmlFor="timeFrame">When Are You Looking to Start?</label>

                    <select
                        name="timeFrame"
                        id="timeFrame"
                        className="form-control"
                        value={formData.timeFrame}
                        onChange={changeHandler}
                    >
                        <option value="">Select Time Frame</option>
                        <option value="As soon as possible">
                            As Soon As Possible
                        </option>
                        <option value="Within 1 month">
                            Within 1 Month
                        </option>
                        <option value="1–3 months">
                            1–3 Months
                        </option>
                        <option value="3+ months">
                            3+ Months
                        </option>
                        <option value="Just getting estimates">
                            Just Getting Estimates
                        </option>
                    </select>

                    {formErrors.timeFrame && (
                        <p className="text-danger">
                            {formErrors.timeFrame.message}
                        </p>
                    )}
                </div>

                <div className="form-group form-group-full">
                    <label htmlFor="notes">
                        Tell Us About Your Project
                    </label>

                    <textarea
                        name="notes"
                        id="notes"
                        className="form-control"
                        rows="5"
                        placeholder="Tell us anything else that would help us understand your project..."
                        value={formData.notes}
                        onChange={changeHandler}
                    />

                    {formErrors.notes && (
                        <p className="text-danger">
                            {formErrors.notes.message}
                        </p>
                    )}
                </div>

                <div className="form-submit">
                    <button type="submit" className="quote-submit">
                        Request a Free Quote
                    </button>
                </div>

            </div>
        </form>
        </>
    );
};

export default Quote;