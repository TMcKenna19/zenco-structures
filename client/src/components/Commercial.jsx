import React from "react";
import { Link } from "react-router-dom";
import roofCoating from "../Images/roofCoating.mp4";
import zencoLogo from "../Images/zencoLogo.png";


const Commercial = () => {
    return(
        <>
        <div className="commercial-hero">   
            <ul className="nav-bar">
                <Link className="link-text-logo" to={'/'}> <li><img src={zencoLogo} alt="" /></li> </Link>
                <Link className="link-text" to={'/residential'}> <li>Residential Services</li></Link>
                <Link className="link-text" to={'/about'}> <li>About</li> </Link>
                <Link className="link-text" to={'/reviews'}> <li>Reviews</li> </Link>
                <Link className="link-text-quote" to={'/quote'}> <li>Request a quote</li> </Link> 
            </ul>
                <video src={roofCoating} autoPlay loop muted/>
            <div className="comm-services-slogan">
                <div>
                    <p>Unleash Your Business's True Colors with our Painting Expertise.</p>
                </div>
            </div>
        </div>
        </>
    );
};

export default Commercial;