import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const NewLeads = props => {
    const [leads, setAllLeads] = useState();
    useEffect(() =>{
        axios.get("http://localhost:8000/api/leads")
        .then(res => setAllLeads(res.data))
        .catch(err => console.log(err))
    }, []);

    return(
        <>
        <h1>New Leads</h1>
        <div className="lead-container">
            {
                leads ? leads.map((lead, i) => <ul key={i} className="lead-card">
                    <Link to={`/lead/${lead._id}`} className="link-text">          
                    <li>{lead.firstName} {lead.lastName}</li>
                    <li>{lead.phoneNumber}</li>
                    <li>{lead.email}</li>
                    </Link>
                </ul>) : "No New Leads"
            }   
        </div>
        </>
        
    )
};

export default NewLeads