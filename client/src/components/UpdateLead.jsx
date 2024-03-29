import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

const UpdateLead = props => {
    const { _id } = useParams();
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

    useEffect(() => {
        axios.get("http://localhost:8000/api/leads/" + _id)
        .then(res => setFormData(res.data[0]))
        .catch(err => console.log(err))
    }, [_id]);

    const changeHandler = e => {
        console.log("click")
        setFormData({...formData, [e.target.name]: e.target.value})
    };

    const submitHandler = e => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/leads/update/" +_id, formData)
        .then(res => {
            if(res.data.error) {
                console.log("error: form submit")
                setFormErrors(res.data.error.errors)
            }else {
                console.log("form submit successful")
                navigate("/leads")
            }
        })
        .catch(err => console.log(err))
    }


    return(
        <>
        <h5>Edit Lead</h5>
        <form onSubmit={submitHandler}>
            <div>
                <div>
                    <label htmlFor="firstName">First Name: </label>
                    <input type="text" name="firstName" id="firstName" className="form-control" value={formData.firstName} onChange={changeHandler} />
                    { formErrors.firstName ? <span><p class="text-danger">{formErrors.firstName.message}</p></span> : ""}
                </div>
                <div>
                    <label htmlFor="lastName">Last Name: </label>
                    <input type="text" name="lastName" id="lastName" className="form-control" value={formData.lastName} onChange={changeHandler} />
                    { formErrors.lastName ? <span><p class="text-danger">{formErrors.lastName.message}</p></span> : ""}
                </div>
                <div>
                    <label htmlFor="phoneNumber">Phone: </label>
                    <input type="text" name="phoneNumber" id="phoneNumber" className="form-control" value={formData.phoneNumber} onChange={changeHandler} />
                    { formErrors.phoneNumber ? <span><p class="text-danger">{formErrors.phoneNumber.message}</p></span> : ""}
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="text" name="email" id="email" className="form-control" value={formData.email} onChange={changeHandler} />
                    { formErrors.email ? <span><p class="text-danger">{formErrors.email.message}</p></span> : ""}
                </div>
                <div>
                    <label htmlFor="propertyType">Property Type: </label>
                    <input type="text" name="propertyType" id="propertyType" className="form-control" placeholder="Residential / Commercial" value={formData.propertyType} onChange={changeHandler} />
                    { formErrors.propertyType ? <span><p class="text-danger">{formErrors.propertyType.message}</p></span> : ""}
                </div>
                <div>
                    <label htmlFor="surfaceLocation">Surface Location: </label>
                    <input type="text" name="surfaceLocation" id="surfaceLocation" className="form-control" placeholder="Interior / Exterior / Both" value={formData.surfaceLocation} onChange={changeHandler} />
                    { formErrors.surfaceLocation ? <span><p class="text-danger">{formErrors.surfaceLocation.message}</p></span> : ""}
                </div>
                <div>
                    <label htmlFor="serviceRequested">Service Requested: </label>
                    <input type="text" name="serviceRequested" id="serviceRequested" className="form-control" value={formData.serviceRequested} onChange={changeHandler} />
                    { formErrors.serviceRequested ? <span><p class="text-danger">{formErrors.serviceRequested.message}</p></span> : ""}
                </div>
                <div>
                    <label htmlFor="timeFrame">Time Frame: </label>
                    <input type="text" name="timeFrame" id="timeFrame" className="form-control" value={formData.timeFrame} onChange={changeHandler} />
                    { formErrors.timeFrame ? <span><p class="text-danger">{formErrors.timeFrame.message}</p></span> : ""}
                </div>
                <div>
                    <label htmlFor="notes">Notes: </label>
                    <textarea type="textbox" name="notes" id="notes" className="form-control" value={formData.notes} onChange={changeHandler} />
                    { formErrors.notes ? <span><p class="text-danger">{formErrors.notes.message}</p></span> : ""}
                </div>
                <div>
                    <label className="form-check-label" htmlFor="flexCheckDefault">Called</label>
                    <input className="form-check-input" type="checkbox" name="isCalled" value="true" id="flexCheckDefault" onChange={changeHandler}/>
                </div>
                <div>
                    <label className="form-check-label" htmlFor="flexCheckDefault">Not Called</label>
                    <input className="form-check-input" type="checkbox" name="isCalled" value="false" id="flexCheckDefault" onChange={changeHandler}/>
                </div>
                <button type="submit" className="btn btn-outline-dark mt-3">Update</button>
            </div>

        </form> 
        </>
    );
};

export default UpdateLead;