import React from "react";
import {Link} from "react-router-dom";


const NavBar = props => {
    return (

        <div className="navBar">
            <h2>
             <Link to={'/'}>Zenco Structures</Link> 
            </h2> 
            <p>
              <Link to={'/residentialPainting'}>Residential Painting</Link>
            </p>
            <p>
              <Link to={'/commercialPainting'}>Commercial Painting</Link>  
            </p>    
            <p>
              <Link to={'/about'}>About</Link>  
            </p>    
            <p>
              <Link to={'/quote'}>Request a Quote</Link>  
            </p>    
        </div>
        
    )    
};

export default NavBar;