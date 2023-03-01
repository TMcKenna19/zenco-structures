import { useEffect, useState } from "react";
import axios from "axios";
import { link } from "react-router-dom";



const AllLeads = props => {
    const [leads, setAllLeads] = useState();
    useEffect(() =>{
        axios.get("http://localhost:8000/api/leads")
        .then(res => setAllLeads(res.data))
        .catch(err => console.log(err))
    }, []);

    return(
        <>
        <h1>Lead:</h1>
        <div className="flex">
        {
            
        }

        </div>

        </>
    )
}

export default AllLeads;