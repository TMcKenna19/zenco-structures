import { Link } from "react-router-dom";
import zencoLogo from "../Images/zencoLogo.png";
import cover from "../Images/cover.jpeg";
import colorPick from "../Images/colorPick.jpeg";
import drywall from "../Images/drywall.jpeg";


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
               <Link className="link-text" to={'/quote'}><h1>Zenco Interior Painting</h1>
                <p>Schedule Your Free Estimate</p></Link>
            </div>
        </div>
        <div className="int-paint-container">
            <div className="int-paint-content">
                <img src={colorPick} alt="person picking a color" />
                <p>After you've worked with the consulting team, our project manager will work closely with you to schedule dates and a time frame that fit seamlessly into your schedule. We understand the importance of convenience and flexibility, so we'll ensure the painting project aligns with your availability and preferences. Our goal is to provide a smooth and accommodating experience, making the transformation of your space as hassle-free as possible.</p>
            </div>
            <div className="int-paint-content">
                <p>At Zenco, our first priority is protecting your property from any potential paint damage. We understand the value and importance of your home and belongings, which is why we take meticulous care to cover and safeguard all surfaces before we begin any painting project. From furniture and flooring to fixtures and decor, we ensure every inch of your home is protected. Our professional team is trained to handle each job with precision and respect, guaranteeing a clean and worry-free painting experience. Your peace of mind and satisfaction are at the heart of everything we do.</p>
                <img src={cover} alt="furniture protection"/>
            </div>
            <div className="int-paint-content">
                <img src={drywall} alt="trowl and plaster" />
                <p>Before we begin painting, we take extensive measures to prepare your space for a flawless finish. Our team meticulously cleans and repairs all surfaces, filling holes and sanding any rough spots to ensure a smooth canvas. This thorough preparation is key to delivering the exceptional results you expect from Zenco.</p>
            </div>
            <div className="int-paint-content">
                <p></p>
            </div>
        </div>
        </>
    )
}

export default IntPaint;