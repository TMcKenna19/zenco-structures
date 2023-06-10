import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

 
const NewLeads = props => {
    const [allLeads, setAllLeads] = useState([]); 
    useEffect(() =>{
        axios.get("http://localhost:8000/api/leads")
        .then(res => setAllLeads(res.data))
        .catch(err => console.log(err)) 
    }, []);

    //filters allLeads where isCalled is false for newLeads map
    const newLeads = allLeads.filter((allLeads) => allLeads.isCalled === false);
    
    return(
        <>
        <ul className="all-leads-nav">
            <Link to={"/leads"} className="link-text"> <li>All Leads</li> </Link> 
            <li>New Leads</li>
            <Link to={"/calledLeads"} className="link-text"> <li>Called Leads</li> </Link>
        </ul>

        <h1>New Leads</h1>
        <div className="lead-container">
            {   
                newLeads.map((lead, i) => <ul key={i} className="lead-card">
                    <Link to={`/lead/${lead._id}`} className="link-text">          
                    <li>{lead.firstName} {lead.lastName}</li>
                    <li>{lead.phoneNumber}</li>
                    <li>{lead.email}</li>
                    <li>{lead.isCalled ? "Called" : "New Lead"}</li>
                    </Link>
                </ul>)
            }

        </div>
        </>
        
    )
};

export default NewLeads