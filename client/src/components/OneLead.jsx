import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

const OneLead = () => {
    const [oneLead, setOneLead] = useState(null);
    const {_id} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get("http://localhost:8000/api/leads/" + _id)
        .then(res => setOneLead(res.data[0]))
        .catch(err => console.log(err))
    },[_id])

    const handleDelete = _id => {
        axios.delete("http://localhost:8000/api/leads/delete/" + _id)
        .then(()=> console.log(`${oneLead.firstName} ${oneLead.lastName} deleted!`))
        .catch(err => console.log("Error: delete lead", err))
        navigate("/leads")
    }

    return(
        <>
        <Link to={"/leads"}>
            <button type="button" className="btn btn-outline-dark">All Leads</button>
        </Link>
        {
            oneLead ? <div className="single-lead-container">
                <ul className="single-lead-card">
                    <li>Name: {oneLead.firstName} {oneLead.lastName}</li>
                    <li>Phone: {oneLead.phoneNumber}</li>
                    <li>Email: {oneLead.email}</li>
                    <li>Propety: {oneLead.propertyType}</li>
                    <li>Surface: {oneLead.surfaceLocation}</li>
                    <li>Service: {oneLead.serviceRequested}</li>
                    <li>Time Frame: {oneLead.timeFrame}</li>
                    <li>Notes: {oneLead.notes}</li>
                    <li>Called: {oneLead.isCalled ? "Yes":"Not Called"}</li>
                </ul>
                <button type="submit" className="btn btn-outline-danger mt-3" onClick={ ()=> handleDelete(oneLead._id)}>Delete Lead</button><Link to={`/update/${oneLead._id}`}><button type="submit" className="btn btn-outline-dark mt-3">Edit</button></Link>
            </div> : ""
        }
                
        </>
    );
};

export default OneLead;