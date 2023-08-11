import React from "react";
import {Link} from "react-router-dom";
import zencoLogo from "../Images/zencoLogo.png";



const Home = () => {



    return(
      <>
        <div className="home-page"> 
          <ul className="nav-bar">
            <Link className="link-text" to={'/residential'}> <li>Residential Services</li> </Link>
            <Link className="link-text" to={'/commercial'}> <li>Commercial Services</li></Link>
            <Link className="link-text" to={'/about'}> <li>About</li> </Link>
            <Link className="link-text" to={'/reviews'}> <li>Reviews</li> </Link>
            <Link className="link-text-quote" to={'/quote'}> <li>Request a quote</li> </Link> 
          </ul> 
          <div className="home-slogan-container">
            <div className="home-page-slogan">
                <img src={zencoLogo} alt="logo" />
                <p>Let Zenco Coatings color your world with our expert touch.</p>
              </div>
          </div>
            
                     
        </div>
        
      </>
    );
};

export default Home;