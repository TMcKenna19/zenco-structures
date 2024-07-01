import { Link } from "react-router-dom";

import zencoLogo from "../Images/zencoLogo.png";

const IntPaint = () => {
    return(
        <>
        <div className="int-hero">
            <ul className="nav-bar">
                <Link className="link-text-logo" to={'/'}> <li><img src={zencoLogo} alt="" /></li> </Link>
                <Link className="link-text" to={'/residential'}> <li>Residential Services</li></Link>
                <Link className="link-text" to={'/commercial'}> <li>Commercial Services</li></Link>
                <Link className="link-text" to={'/about'}> <li>About</li> </Link>
                <Link className="link-text" to={'/reviews'}> <li>Reviews</li> </Link>
                <Link className="link-text-quote" to={'/quote'}> <li>Request a Quote</li> </Link> 
            </ul>
            <div className="int-hero-content">
                <h1>Zenco Interior Painting</h1>
                <p>Schedule Your Fee Estimate </p>
               <p></p>
            </div>
        </div>
        <div className="int-service-container">
            <h1>Interior Painting Services</h1>
            <div className="service-card">
                
            </div>

        </div>
        </>
    )
}

export default IntPaint;