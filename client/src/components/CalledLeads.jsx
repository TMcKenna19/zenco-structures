import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const CalledLeads = props => {
    return(
        
        <>
            <ul className="all-leads-nav">
                <Link to={"/leads"} className="link-text"> <li>All Leads</li> </Link> 
                <Link to={"/newleads"} className="link-text"> <li>New Leads</li> </Link>
                <li>Called Leads</li>
            </ul>
            <h1>Called Leads</h1>
        </>
    )
};

export default CalledLeads; 