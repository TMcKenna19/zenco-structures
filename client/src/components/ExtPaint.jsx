import React from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import zencoLogo from "../Images/zencoLogo.png";
import instagramIcon from "../Images/instagramIcon.png";
import facebookIcon from "../Images/facebookIcon.png";
import tikTokIcon from "../Images/tikTokIcon.png";
import basilBloom from "../Images/basilBloom.jpeg";
import estimator from "../Images/estimator.jpg";
const ExtPaint = () => {
return (
    <>
        <div className="ext-hero">
            <ul className="nav-bar">
                <Link className="link-text-logo" to={'/'}> <li><img src={zencoLogo} alt="" /></li> </Link>
                <Link className="link-text" to={'/residential'}> <li>Residential Services</li></Link>
                <Link className="link-text" to={'/commercial'}> <li>Commercial Services</li></Link>
                <Link className="link-text" to={'/about'}> <li>About</li> </Link>
                <Link className="link-text" to={'/reviews'}> <li>Reviews</li> </Link>
                <Link className="link-text-quote" to={'/quote'}> <li>Request a Quote</li> </Link> 
            </ul>
            <div className="ext-hero-content">
                <Link className="link-text" to={'/quote'}><h1>Zenco Exterior Painting</h1>
                <p>Schedule Your Free Estimate</p></Link>
            </div>
        </div>
        <div className="ext-paint-container">
            <div className="ext-paint-content">
                <img src={estimator} alt="" />
                <p>At Zenco, we offer a free, no-obligation estimate to help you plan your painting project with confidence. Our estimator will visit your home to discuss your needs, assess the space, and answer any questions you may have. During this visit, we provide a detailed breakdown of the costs involved and a clear, realistic project timeline tailored to your schedule. This transparent approach ensures you have all the information you need to make the best decision for your home, with no pressure or commitment. We're here to make your painting experience seamless and stress-free from start to finish.</p>
            </div>
        </div>
        <div className="footer-container">
            <div className="copyright-content">
                <p>Copyright &#169; 2023 Zenco Coatings LLC</p>
                <p>Zenco Coatings on Social Media</p>
                <div className="social-links">
                    <Link to={"https://www.instagram.com/"}><img src={instagramIcon} alt="instagram icon" /></Link><Link to={"https://www.facebook.com/"}><img src={facebookIcon} alt="facebook icon" /></Link>
                    <Link to={"https://www.tiktok.com/"}><img src={tikTokIcon} alt="tik tok icon"/></Link>
                </div>
            </div>
            <div className="legal-info">
                <ul>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                    <li>Do not sell my information</li>
                </ul>
            </div>
            <div className="contact-info">
                <ul>
                    <li>550 Bay street</li>
                    <li>Sarasota, FL 37822</li>
                    <li>contact@zenco.com</li>
                </ul>
            </div>
            <div className="basil-content">
                <tbody>
                    <td><Link to={"https://basilbloomcreative.com/"}><img src={basilBloom} alt="basil bloom" /></Link></td>
                    <td>Website created by Basil Bloom LLC</td>
                </tbody>   
            </div>      
        </div>
        
    </>
    )
}

export default ExtPaint; 
