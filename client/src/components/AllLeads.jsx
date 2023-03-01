import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";



const AllLeads = props => {
    const [leads, setAllLeads] = useState();
    useEffect(() =>{
        axios.get("http://localhost:8000/api/leads")
        .then(res => setAllLeads(res.data))
        .catch(err => console.log(err))
    }, []);

    return(
        <>
        <h1>Leads:</h1>
        <div className="flex">
        {
            leads ? leads.map((leads, i) => <div key={i} className="leadCard">
                <h3>{leads.firstName} {leads.lastName}</h3>
                <h3>{leads.phoneNumber}</h3>
                <h3>{leads.email}</h3>
            </div>) : ""
        }

        </div>

        </>
    )
}

export default AllLeads;