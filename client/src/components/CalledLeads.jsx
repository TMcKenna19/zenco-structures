import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const CalledLeads = props => {
    const [allLeads, setAllLeads] = useState([]);
    useEffect(() =>{
        axios.get("http://localhost:8000/api/leads")
        .then(res => setAllLeads(res.data))
        .catch(err => console.log(err)) 
    }, []);

    //filters allLeads where isCalled true for calledLeads map
    const calledLeads = allLeads.filter((allLeads) => allLeads.isCalled === true);

    // background color updates to green if lead is called 
    const isCalledColor = {
        backgroundColor: "#0D561B"
    };

    return(
        
        <>
            <ul className="all-leads-nav">
                <Link to={"/leads"} className="link-text"> <li>All Leads</li> </Link> 
                <Link to={"/newleads"} className="link-text"> <li>New Leads</li> </Link>
                <li>Called Leads</li>
            </ul>
            <h1>Called Leads</h1>
            <div className="lead-container">
            {   
                calledLeads.map((lead, i) => <ul key={i} className="lead-card"  style={lead.isCalled ? isCalledColor : "No Called Leads" }>
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

export default CalledLeads; 