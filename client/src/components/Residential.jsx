import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import modernLivingRm from "../Images/modernLivingRm.jpeg";
import extPainter from "../Images/extPainter.jpeg";
import colorSelection from "../Images/colorSelection.jpeg";
import woodFence from "../Images/woodFence.jpeg";
import cabinets from "../Images/cabinets.jpeg";
import garage from "../Images/garage.jpeg";
import trowl from "../Images/trowl.jpeg";
import leadHazard from "../Images/leadHazard.jpeg";
import greenRoom from  "../Images/greenRoom.jpeg";
import ecoFriend from "../Images/ecoFriend.jpeg";
import ecoFlip from "../Images/ecoFlip.jpeg";
import resReview from "../Images/resReview.jpeg";
import insureIcon from "../Images/insureIcon.jpeg";
import warrantyIcon from "../Images/warrantyIcon.jpeg";
import trustedIcon from "../Images/trustedIcon.jpeg";
import chatIcon from "../Images/chatIcon.jpeg";
import dollarIcon from "../Images/dollarIcon.jpeg";
import bulbIcon from "../Images/bulbIcon.jpeg";
import Footer from "./Footer";


const Residential = () => {
 
// Image changes when it comes into view
function ImageToggleOnView({ primaryImg, secondaryImg }) {
    const containerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [showSecondary, setShowSecondary] = useState(false);

    useEffect(() => {
        const element = containerRef.current;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {
                threshold: 0.1
            }
        );

        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, []);

    useEffect(() => {
        if (!isVisible) {
            setShowSecondary(false);
            return;
        }

        const interval = setInterval(() => {
            setShowSecondary((current) => !current);
        }, 1500);

        return () => clearInterval(interval);
    }, [isVisible]);

    return (
        <div className="image-toggle" ref={containerRef}>
            <img
                src={primaryImg}
                alt=""
                className={`toggle-image ${
                    showSecondary ? "hidden" : "visible"
                }`}
            />

            <img
                src={secondaryImg}
                alt=""
                className={`toggle-image secondary ${
                    showSecondary ? "visible" : "hidden"
                }`}
            />
        </div>
    );
}

const ImageChangeOnView = () => {
    return (
        <ImageToggleOnView
            primaryImg={ecoFriend}
            secondaryImg={ecoFlip}
        />
    );
};
 
    return( 
    <>
        <NavBar/>
        <section className="hero">
            <div className="hero-image">
                <img src={modernLivingRm} alt="Modern living room" />
            </div> 
            <div className="hero-copy">
                <h1>Zenco Coatings Residential Services.</h1>
            </div>    
        </section>
        <div className="res-service-card-container">
            <div className="res-service-card">
                <img src={colorSelection} className="card-img-top" alt="color cards"/>
                <div className="res-card-body">
                    <h5 className="res-card-title">Color Consultation</h5>
                    <p className="res-card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link className="link-text" to={'/colorconsult'}><button type="button" className="btn btn-outline-dark">Learn More</button></Link>
                </div>
            </div>  
            <div className="res-service-card">
                <img src={greenRoom} className="card-img-top" alt="interior painters"/>
                <div className="res-card-body">
                    <h5 className="res-card-title">Interior Painting</h5>
                    <p className="res-card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link className="link-text" to={'/interiorpaint'}><button type="button" className="btn btn-outline-dark">Learn More</button></Link>
                </div>
            </div>  
            <div className="res-service-card">
                <img src={extPainter} className="card-img-top" alt="exterior painter"/>
                <div className="res-card-body">
                    <h5 className="res-card-title">Exterior Painting</h5>
                    <p className="res-card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link className="link-text" to={'/exteriorpaint'}><button type="button" className="btn btn-outline-dark">Learn More</button> </Link>
                </div>
            </div>  
            <div className="res-service-card">
                <img src={woodFence} className="card-img-top" alt="wood deck"/>
                <div className="res-card-body">
                    <h5 className="res-card-title">Deck / Fence Staining</h5>
                    <p className="res-card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link className="link-text" to={'/deckfence'}> <button type="button" className="btn btn-outline-dark">Learn More</button></Link>
                </div>
            </div>  
            <div className="res-service-card">
                <img src={cabinets} className="card-img-top" alt="wood deck"/>
                <div className="res-card-body">
                    <h5 className="res-card-title">Cabinet Painting / Refacing</h5>
                    <p className="res-card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link className="link-text" to={'/cabinets'}> <button type="button" className="btn btn-outline-dark">Learn More</button></Link>
                </div>
            </div>  
            <div className="res-service-card">
                <img src={garage} className="card-img-top" alt="wood deck"/>
                <div className="res-card-body">
                    <h5 className="res-card-title">Garage Floors</h5>
                    <p className="res-card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link className="link-text" to={'/garagefloors'}>
                    <button type="button" className="btn btn-outline-dark">Learn More</button>
                    </Link>
                </div>
            </div>  
            <div className="res-service-card">
                <img src={trowl} className="card-img-top" alt="trowl"/>
                <div className="res-card-body">
                    <h5 className="res-card-title">Drywall Repair</h5>
                    <p className="res-card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link className="link-text" to={'/drywall'}>
                    <button type="button" className="btn btn-outline-dark">Learn More</button>
                    </Link>
                </div>
            </div>  
            <div className="res-service-card">
                <img src={leadHazard} className="card-img-top" alt="lead test"/>
                <div className="res-card-body">
                    <h5 className="res-card-title">EPA Lead Certified</h5>
                    <p className="res-card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link className="link-text" to={'/leadtest'}>
                    <button type="button" className="btn btn-outline-dark">Learn More</button>
                    </Link>
                </div>
            </div>  
        </div>
        <div className="review-container">
            <div className="review-image">
                <img src={resReview} alt="homeowner" />
            </div>
            <div className="review-copy">
                <p>"Not only did Zenco Coatings exceed my expectations in terms of the quality of their work, but they also demonstrated excellent project management. They completed the project within the agreed-upon timeframe and budget, making the entire process seamless and stress-free for me."
                </p>
                <p>- Kona, Homeowner</p>
                <Link className="review-estimate-cta" to={'/quote'}> <p>GET YOUR FREE ESTIMATE</p> </Link>
            </div>
        </div>
        {/* image flip */}
        <div className="eco-container">
            <div className="eco-statement">
                <div className="eco-image">
                    <ImageChangeOnView />
                </div>
                <p>Zenco Coatings is committed to both exceptional results and the environment, which is why we exclusively use environmentally friendly products that are zero or low VOC (Volatile Organic Compounds), ensuring a healthier and more sustainable painting experience for our clients and the planet</p>
            </div>
        </div>
        {/* priority cards */}
        <div className="priority-container">
            <div className="priority-card">
                <img src={insureIcon} alt="pen/pad" />
                <div className="priority-card-body">
                    <h2>Fully Insured</h2>
                    <p>Insured up to 30 million, Providing you with peace of mind and protection throughout the entirety of our services</p>
                </div>
            </div>
            <div className="priority-card">
                <img src={warrantyIcon} alt="warranty" />
                <div className="priority-card-body">
                    <h2>Life Time Warranty*</h2>
                    <p>Our lifetime warranty, gives you complete confidence in the longevity and quality of our products, ensuring a lasting investment in your satisfaction</p>
                </div>
            </div>
            <div className="priority-card">
                <img src={trustedIcon} alt="pen/pad" />
                    <div className="priority-card-body">
                        <h2>Community Trusted</h2>
                        <p>Zenco has earned the trust of the community through 75 years of reliable service, exceptional craftsmanship, and a genuine commitment to customer satisfaction</p>
                    </div>
                </div>
            <div className="priority-card">
                <img src={chatIcon} alt="pen/pad" />
                    <div className="priority-card-body">
                        <h2>Easy Communication</h2>
                        <p>Experience hassle-free projects with our company's easy communication approach, ensuring seamless interactions and a smooth journey from start to finish</p>
                    </div>
                </div>
            <div className="priority-card">
                <img src={dollarIcon} alt="pen/pad" />
                    <div className="priority-card-body">
                        <h2>Estimates</h2>
                        <p>We take pride in our ability to accommodate any budget, offering flexible solutions and tailored packages without compromising on the quality of our services</p>
                    </div>
                </div>
            <div className="priority-card">
                <img src={bulbIcon} alt="pen/pad" />
                    <div className="priority-card-body">
                        <h2>Insight</h2>
                        <p>We stay at the forefront of the industry, constantly updating our knowledge on the latest technologies, trends, and practices to deliver cutting-edge solutions for our valued clients</p>
                    </div>
            </div>       
        </div>
        
        <Footer/> 
    </>
    );
};

export default Residential;