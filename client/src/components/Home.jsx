import React from "react";
import {Link} from "react-router-dom";



const Home = () => {



    return(
      <>
        <div className="homePage"> 
          <ul className="navBar">
            {/* <Link className="link-text" to={'/'}> <li>Zenco Structures</li> </Link> */}
            <Link className="link-text" to={'/residentialPainting'}> <li>Residential Services</li> </Link>
            <Link className="link-text" to={'/commercialPainting'}> <li>Commercial Services</li></Link>
            <Link className="link-text" to={'/about'}> <li>About</li> </Link>
            <Link className="link-text" to={'/reviews'}> <li>Reviews</li> </Link>
            <Link className="link-text" to={'/quote'}> <li>Request a quote</li> </Link> 
          </ul> 
            <div>
              <div className="slogan">
                <h1>Zenco Structures</h1>
                <h5>Color your world with our expert touch. Bring vibrancy and life to your residential or commercial space.</h5>
              </div>
            </div>
        </div>
        
      </>
    );
};

export default Home;