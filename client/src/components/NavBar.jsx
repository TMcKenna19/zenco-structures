import React from "react";
import {Link} from "react-router-dom";


const NavBar = () => {
    return (

        <div className="navBar" >
            <h5>
             <Link to={'/'} >Zenco Structures</Link> 
            </h5> 
            <h5>
              <Link to={'/residentialPainting'} style={{ textDecoration: 'none', color: 'rgb(194, 193, 193)' }}>Residential Painting</Link>
            </h5>
            <h5>
              <Link to={'/commercialPainting'} style={{ textDecoration: 'none', color: 'rgb(194, 193, 193)' }}>Commercial Painting</Link>  
            </h5>    
            <h5>
              <Link to={'/about'} style={{ textDecoration: 'none', color: 'rgb(194, 193, 193)' }}>About</Link>  
            </h5>    
            <h5>
              <Link to={'/quote'} style={{ textDecoration: 'none', color: 'rgb(194, 193, 193)' }}>Request a Quote</Link>  
            </h5>    
        </div>
        
    )    
};

export default NavBar;