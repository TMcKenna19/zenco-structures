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

    // background color updates to green if called 
    const leadCalled = {
         
    }

    return(
        <>
        <h1>Current Leads</h1>
        <div className="lead-container">
            {
                leads ? leads.map((lead, i) => <div key={i} className="lead-card">
                    <Link to={`/lead/${lead._id}`} className="link-text">
                    <h3>{lead.firstName} {lead.lastName}</h3>
                    <h3>{lead.phoneNumber}</h3>
                    <h3>{lead.email}</h3>
                    </Link>
                </div>) : "No Leads"
            }
            
        </div>

        </>
    )
}

export default AllLeads;