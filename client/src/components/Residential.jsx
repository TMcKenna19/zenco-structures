import React from "react";
import { Link } from "react-router-dom";
import painter from "../Images/painter.jpeg"


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
                <div className="res-promo">
                    <p>--% promo offer</p>
                </div>
            </div>    
        </div> 
        <div className="wrapper">
            <div className="res-service-card">
                <img src={painter} alt="painter" />
                <h3>Exterior Painting</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
            </div>
        </div>
        
    </>
    );
};

export default Residential;