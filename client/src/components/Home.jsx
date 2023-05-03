import React from "react";
import {Link} from "react-router-dom";



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
            <div className="home-page-slogan">
              <p>Let Zenco Structures color your world with our expert touch. Bring vibrancy and life to your residential or commercial space.</p>
            </div>
                     
        </div>
        
      </>
    );
};

export default Home;