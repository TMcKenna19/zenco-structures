import React from "react";
import { Link } from "react-router-dom";
import residentialPainters from "../Images/residentialPainters.jpeg";

const Residential = () => {
    return( 
        <>
        {/* <div className="resBannerImg">
            <img src={residentialPainters} alt="painters"/>
        </div>
        <ul>
            <li><Link to={'/'} style={{ textDecoration: 'none', color:'rgb(194, 193, 193)' }}>Zenco Structures</Link></li>
            <li>
            <Link to={'/commercialPainting'} style={{ textDecoration: 'none', color: 'rgb(194, 193, 193)' }}>Commercial Painting</Link> 
            </li>
        </ul> */}
       
        <div>
            <h3>Residential Services </h3>
            <p>Zenco Structures offers professional exterior house painting services. We are able to help with all exterior home surfaces. Including stucco, wood, vinyl siding, log homes and more!</p>
        </div>
        <div>

        </div>
        </>
    );
};

export default Residential;