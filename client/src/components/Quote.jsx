import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


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
        serviceRequested: "",
        timeFrame: "",
        notes: "",
        isCalled: false
        
    });

    const changeHandler = e => {
        setFormData({...formData, [e.target.name]: e.target.value})
    };

    const submitHandler = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/leads/create", formData)
        .then(res => {
            if(res.data.error) {
                console.log("error: form submit")
                setFormErrors(res.data.error.errors)
            }else {
                console.log("form submit successful")
                navigate("/thankyou")
            }
        })
        .catch(err => console.log(err))
    }

    return(
        <>
        <h5>Request a Quote</h5>
        <form onSubmit={submitHandler}>
            <div>
                <div>
                    <label htmlFor="firstName">First Name: </label>
                    <input type="text" name="firstName" id="firstName" className="form-control" value={formData.firstName} onChange={changeHandler} />
                    { formErrors.firstName ? <span>{formErrors.firstName.message}</span> : ""}
                </div>
                <div>
                    <label htmlFor="lastName">Last Name: </label>
                    <input type="text" name="lastName" id="lastName" className="form-control" value={formData.lastName} onChange={changeHandler} />
                    { formErrors.lastName ? <span>{formErrors.lastName.message}</span> : ""}
                </div>
                <div>
                    <label htmlFor="phoneNumber">Phone: </label>
                    <input type="text" name="phoneNumber" id="phoneNumber" className="form-control" value={formData.phoneNumber} onChange={changeHandler} />
                    { formErrors.phoneNumber ? <span>{formErrors.phoneNumber.message}</span> : ""}
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="text" name="email" id="email" className="form-control" value={formData.email} onChange={changeHandler} />
                    { formErrors.email ? <span>{formErrors.email.message}</span> : ""}
                </div>
                <div>
                    <label htmlFor="propertyType">Property Type: </label>
                    <input type="text" name="propertyType" id="propertyType" className="form-control" placeholder="Residential / Commercial" value={formData.propertyType} onChange={changeHandler} />
                    { formErrors.propertyType ? <span>{formErrors.propertyType.message}</span> : ""}
                </div>
                <div>
                    <label htmlFor="surfaceLocation">Surface Location: </label>
                    <input type="text" name="surfaceLocation" id="surfaceLocation" className="form-control" placeholder="Interior / Exterior / Both" value={formData.surfaceLocation} onChange={changeHandler} />
                    { formErrors.surfaceLocation ? <span>{formErrors.surfaceLocation.message}</span> : ""}
                </div>
                <div>
                    <label htmlFor="serviceRequested">Service Requested: </label>
                    <input type="text" name="serviceRequested" id="serviceRequested" className="form-control" value={formData.serviceRequested} onChange={changeHandler} />
                    { formErrors.serviceRequested ? <span>{formErrors.serviceRequested.message}</span> : ""}
                </div>
                <div>
                    <label htmlFor="timeFrame">Time Frame: </label>
                    <input type="text" name="timeFrame" id="timeFrame" className="form-control" value={formData.timeFrame} onChange={changeHandler} />
                    { formErrors.timeFrame ? <span>{formErrors.timeFrame.message}</span> : ""}
                </div>
                <div>
                    <label htmlFor="notes">Notes: </label>
                    <textarea type="textbox" name="notes" id="notes" className="form-control" value={formData.notes} onChange={changeHandler} />
                    { formErrors.notes ? <span>{formErrors.notes.message}</span> : ""}
                </div>
                <button type="submit" className="btn btn-outline-dark mt-3" >Submit</button>
            </div>

        </form>
        </>
    );
};

export default Quote;