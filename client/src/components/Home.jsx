import React from "react";
import coverHouse from "../Images/coverHouse.jpeg";
import {Link} from "react-router-dom";


const Home = () => {
    
    return(
        <>
        <div className="homePage"> 
            <div className="homePageNavBar">
                <h5>
                 <Link to={'/'} style={{ textDecoration: 'none', color:'rgb(50, 49, 49)' }}>Zenco Structures</Link> 
                </h5> 
                <h5>
                  <Link to={'/residentialPainting'} style={{ textDecoration: 'none', color: 'rgb(50, 49, 49)' }}>Services</Link>
                </h5>  
                <h5>
                  <Link to={'/about'} style={{ textDecoration: 'none', color: 'rgb(50, 49, 49)' }}>About</Link>  
                </h5>    
                <h5>
                  <Link to={'/quote'} style={{ textDecoration: 'none', color: 'rgb(50, 49, 49)' }}>Request a Quote</Link>  
                </h5>  
            </div>  
            
        </div>
        
        </>
    );
};

export default Home;