import React from "react";
import { Link } from "react-router-dom";
import consultClient from "../Images/consultClient.jpeg";
import consultVid from "../Images/consultVid.mp4";
import zencoLogo from "../Images/zencoLogo.png";
import basilBloom from "../Images/basilBloom.jpeg";
import instagramIcon from "../Images/instagramIcon.png";
import facebookIcon from "../Images/facebookIcon.png";
import tikTokIcon from "../Images/tikTokIcon.png";


const ColorConsult = () => {
    return (
    <>
        <div className="color-consult-hero">
            <ul className="nav-bar">
                <Link className="link-text-logo" to={'/'}> <li><img src={zencoLogo} alt="zenco logo"/></li> </Link>
                <Link className="link-text" to={'/residential'}> <li>Residential Services</li></Link>
                <Link className="link-text" to={'/commercial'}> <li>Commercial Services</li></Link>
                <Link className="link-text" to={'/about'}> <li>About</li> </Link>
                <Link className="link-text" to={'/reviews'}> <li>Reviews</li> </Link>
                <Link className="link-text-quote" to={'/quote'}> <li>Request a Quote</li> </Link> 
            </ul> 
            <div className="color-consult-hero-content">
                <p>The painting process is designed to transform your living space into a beautifully refreshed and inviting environment. Here's what you can expect when you hire Zenco Coatings</p>
            </div> 
        </div>
        <div className="color-consult-container">
            <div className="color-consult-content">
                <p>Our skilled consultants collaborate closely with you, taking the time to understand your preferences, the ambiance you wish to create, and the specific elements you want to highlight.
                With their expertise, they will guide you through an array of color palettes and combinations that perfectly match your desired aesthetic.
                </p>
                <img src={consultClient} alt="color consultant" />
            </div>
        </div> 
        <div className="consult-quote-container">
            <div className="consult-quote">
                <p>"The color consultation team from Zenco Coatings was truly exceptional. They listened attentively to my preferences and offered expert guidance, helping me select a color scheme that beautifully transformed my space. Their attention to detail and creative insights made the entire process a breeze, resulting in an outcome that exceeded my expectations. I couldn't be happier with the results of their expertise."</p>

                <p>- Rockwell, Homeowner</p>
            <Link className="constult-quote-link" to={'/quote'}> <p>GET A FREE ESTIMATE</p> </Link>
            </div>
        </div>
        <div className="video-container">
            <div className="video-content">
                <video src={consultVid} autoPlay loop muted type="video/webm" />
                <p>This collaborative process extends beyond color selection, as our consultants consider lighting, room functionality, and the overall flow of your space.Their goal is to create a harmonious color scheme that resonates with your personality and complements your décor.</p>
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

export default ColorConsult;