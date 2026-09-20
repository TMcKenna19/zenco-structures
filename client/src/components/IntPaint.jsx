import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import redCouch from "../Images/redCouch.jpeg";
import cover from "../Images/cover.jpeg";
import colorPick from "../Images/colorPick.jpeg";
import drywall from "../Images/drywall.jpeg";
import paintRoller from "../Images/paintRoller.jpeg";
import painterOwner from "../Images/painterOwner.jpeg";
import Footer from "./Footer";


const IntPaint = () => {
    return(
        <>
        <NavBar/>
        <section className="hero">
            <div className="hero-image">
                <img src={redCouch} alt="red couch" />
            </div>
            <div className="hero-copy">  
               <Link className="link-text" to={'/quote'}><h1>Zenco Interior Painting</h1>
                <p>Get Your Free Estimate</p></Link>
            </div>
        </section>

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
                <p>At Zenco, we believe in delivering only the best results, which is why we exclusively use high-quality paint for all our projects. Our premium paints offer superior durability, vibrant colors, low / zero VOC and a flawless finish that stands the test of time. By choosing top-tier products, we ensure that your space not only looks stunning but also maintains its beauty for years to come. Trust us to provide a professional painting service that combines exceptional craftsmanship.</p>
                <img src={paintRoller} alt="painter with roller" />
            </div>
            <div className="int-paint-content">
                <img src={painterOwner} alt="painter and homeowner" />
                <p>At Zenco, we prioritize your satisfaction and ensure every detail is perfect before considering a job complete. As part of our commitment to excellence, we conduct a final walkthrough with you. During this walkthrough, we meticulously inspect every aspect of the project, addressing any touch-ups or concerns you may have. This collaborative review guarantees that the finished work meets your expectations and our high standards. We aim to leave you delighted with a beautifully transformed space and complete peace of mind.</p>
            </div>
            <Footer/> 
        </div>
        </>
    )
}

export default IntPaint;