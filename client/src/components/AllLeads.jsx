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

    // background color updates to green if lead is called 
    const isCalledColor = {
        backgroundColor: "#0C3A2F"
    };

    const notCalledColor = {
        backgroundColor: "#004970f0"
    };

    return(
        <>
        <ul className="all-leads-nav">
            <li>All Leads</li>
            <Link to={"/newleads"} className="link-text"> <li>New Leads</li> </Link>
            <li>Called Leads</li>
        </ul>
        

        
        <div className="lead-container">
            {
                leads ? leads.map((lead, i) => <ul key={i} className="lead-card" style={lead.isCalled ? isCalledColor : notCalledColor } >
                    <Link to={`/lead/${lead._id}`} className="link-text">          
                    <li>{lead.firstName} {lead.lastName}</li>
                    <li>{lead.phoneNumber}</li>
                    <li>{lead.email}</li>
                    <li>{lead.isCalled ? "Called" : "New Lead"}</li>
                    </Link>
                </ul>) : "No Leads"
            }

            
        </div>

        </>
    )
}

export default AllLeads;