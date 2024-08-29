import React from "react";
import { Link } from "react-router-dom";
// import roofCoating from "../Images/roofCoating.mp4";
import zencoLogo from "../Images/zencoLogo.png";
import basilBloom from "../Images/basilBloom.jpeg";
import instagramIcon from "../Images/instagramIcon.png";
import facebookIcon from "../Images/facebookIcon.png";
import tikTokIcon from "../Images/tikTokIcon.png";

const Commercial = () => {
    return(
        <>
        <div className="commercial-hero">   
            <ul className="nav-bar">
                <Link className="link-text-logo" to={'/'}> <li><img src={zencoLogo} alt="" /></li> </Link>
                <Link className="link-text" to={'/residential'}> <li>Residential Services</li></Link>
                <Link className="link-text" to={'/about'}> <li>About</li> </Link>
                <Link className="link-text" to={'/reviews'}> <li>Reviews</li> </Link>
                <Link className="link-text-quote" to={'/quote'}> <li>Request a quote</li> </Link> 
            </ul>
                {/* <video src={roofCoating} autoPlay loop muted/> */}
            <div className="comm-services-slogan">
                <div>
                    <p>Unleash Your Business's True Colors with our Painting Expertise.</p>
                </div>
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
    );
};

export default Commercial;