import React from "react";
import {Link} from "react-router-dom";



const Home = () => {

const navStyles = {
  textDecoration: "none",
  color: "white"
};

    return(
        <>
        <div className="homePage"> 

          <ul className="navBar">
            <Link to={'/'} style={navStyles} > <li>Zenco Structures</li> </Link>
            <Link to={'/services'} style={navStyles}> <li>Services</li> </Link>
            <Link to={'/about'} style={navStyles}> <li>About</li> </Link>
            <Link to={'/quote'} style={navStyles}> <li>Request a quote</li> </Link> 
          </ul>

        </div>
        
        </>
    );
};

export default Home;