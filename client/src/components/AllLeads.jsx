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
        backgroundColor: "#056205"
    };

    const notCalledColor = {
        backgroundColor: "#004970f0"
    };

    return(
        <>
        <h1>Current Leads</h1>
        <div className="lead-container">
            {
                leads ? leads.map((lead, i) => <div key={i} className="lead-card" style={lead.isCalled ? isCalledColor : notCalledColor }>
                    <Link to={`/lead/${lead._id}`} className="link-text">          
                    <h3>{lead.firstName} {lead.lastName}</h3>
                    <h3>{lead.phoneNumber}</h3>
                    <h3>{lead.email}</h3>
                    {/* <h3>Called: {lead.isCalled ? "Yes" : "No"}</h3> */}
                    </Link>
                </div>) : "No Leads"
            }

            
        </div>

        </>
    )
}

export default AllLeads;