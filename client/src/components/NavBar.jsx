import React from "react";
import {Link} from "react-router-dom";
import zencoLogo from "../Images/zencoLogo.png";


const NavBar = () => {

  

    return (
        <div>
            <ul className="nav-bar">
                <Link className="link-text-logo" to={'/'}> <li><img src={zencoLogo} alt="" /></li> </Link>
                <Link className="link-text" to={'/residential'}> <li>Residential Services</li></Link>
                <Link className="link-text" to={'/commercial'}> <li>Commercial Services</li></Link>
                <Link className="link-text" to={'/about'}> <li>About</li> </Link>
                <Link className="link-text" to={'/reviews'}> <li>Reviews</li> </Link>
                <Link className="link-text-quote" to={'/quote'}> <li>Free Estimate</li> </Link> 
            </ul>
        </div>
        
    )    
};

export default NavBar;

// Delete this navBar if not needed 