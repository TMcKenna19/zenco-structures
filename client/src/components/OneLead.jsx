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
        {
            oneLead ? <div>
                <h2>Name: {oneLead.firstName} {oneLead.lastName}</h2>
                <h2>Phone: {oneLead.phoneNumber}</h2>
                <h2>Email: {oneLead.email}</h2>
                <h2>Propety: {oneLead.propertyType}</h2>
                <h2>Surface: {oneLead.surfaceLocation}</h2>
                <h2>Service: {oneLead.serviceRequested}</h2>
                <h2>Time Frame: {oneLead.timeFrame}</h2>
                <h2>Notes: {oneLead.notes}</h2>
                <h2>Called: {oneLead.isCalled ? "Called":"Not Called"}</h2>
                <button type="submit" className="btn btn-outline-danger mt-3" onClick={ ()=> handleDelete(oneLead._id)}>Delete Lead</button>
            </div> : ""
        }
        </>
    );
};

export default OneLead;