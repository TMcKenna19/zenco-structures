import React from "react";
import { Link } from "react-router-dom";
import basilBloom from "../Images/basilBloom.jpeg";
import instagramIcon from "../Images/instagramIcon.png";
import facebookIcon from "../Images/facebookIcon.png";
import tikTokIcon from "../Images/tikTokIcon.png";

const Footer = () => {
    return (
        <>
        <div className="footer-container">
            <div className="copyright-content">
                <p>Copyright &#169; 2026 Zenco Coatings LLC</p>
                <p>Zenco Coatings on Social Media</p>
                <div className="social-links">
                    <Link to="https://www.instagram.com/" target="_blank"><img src={instagramIcon} alt="instagram icon" /></Link><Link to="https://www.facebook.com/" target="_blank"><img src={facebookIcon} alt="facebook icon" /></Link>
                    <Link to="https://www.tiktok.com/" target="_blank"><img src={tikTokIcon} alt="tik tok icon"/></Link>
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
                    <td><Link to="https://basilbloomcreative.com/" target="_blank"><img src={basilBloom} alt="basil bloom" /></Link></td>
                    <td>Website created by Basil Bloom LLC</td>
                </tbody>   
            </div>     
        </div>
        </>
    )
}

export default Footer;