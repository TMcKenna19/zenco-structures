import React from "react";
import { Link } from "react-router-dom";


const Residential = () => {
    return( 
    <>
        <div className="residentail-hero">   
            <ul className="nav-bar">
                <Link className="link-text" to={'/'}> <li>Zenco Structures</li> </Link>
                <Link className="link-text" to={'/commercial'}> <li>Commercial Services</li></Link>
                <Link className="link-text" to={'/about'}> <li>About</li> </Link>
                <Link className="link-text" to={'/reviews'}> <li>Reviews</li> </Link>
                <Link className="link-text" to={'/quote'}> <li>Request a quote</li> </Link> 
            </ul> 
            <div className="res-services-slogan">
                <div>
                    <p>Zenco Structures offers professional residential painting services, for all home surfaces. </p>
                </div>
            </div>    
        </div> 
    </>
    );
};

export default Residential;