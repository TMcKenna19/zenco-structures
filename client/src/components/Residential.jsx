import React from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import extPainter from "../Images/extPainter.jpeg";
import colorSelection from "../Images/colorSelection.jpeg";
import woodFence from "../Images/woodFence.jpeg";
import zencoLogo from "../Images/zencoLogo.png";
import cabinets from "../Images/cabinets.jpeg";
import garage from "../Images/garage.jpeg";
import drywall from "../Images/drywall.jpeg";
import leadHazard from "../Images/leadHazard.jpeg";
import greenRoom from  "../Images/greenRoom.jpeg";
import ecoFriend from "../Images/ecoFriend.jpeg";
import ecoFlip from "../Images/ecoFlip.jpeg";
import insureIcon from "../Images/insureIcon.jpeg";
import warrantyIcon from "../Images/warrantyIcon.jpeg";
import trustedIcon from "../Images/trustedIcon.jpeg";
import chatIcon from "../Images/chatIcon.jpeg";
import dollarIcon from "../Images/dollarIcon.jpeg";
import bulbIcon from "../Images/bulbIcon.jpeg";
import colorDesign from "../Images/colorDesign.jpeg";
import plaster from "../Images/plaster.jpeg";
import painterWall from "../Images/painterWall.jpeg";
import paintRoller from "../Images/paintRoller.jpeg";


const Residential = () => {
    // onClick scroll 
    const refColorSelect = useRef(null);
    const handleColorSelect = () => {
        refColorSelect.current?.scrollIntoView({behavior: 'auto'});
    };

    // const refIntPaint = useRef(null);
    // const handleIntPaint = () => {
    //     refIntPaint.current?.scrollIntoView({behavior: 'auto'});
    // };

    //Image flip 
    function ImageToggleOnMouseOver({ primaryImg, secondaryImg }) {
        const imageRef = useRef(null);

        return (
            <img onMouseOver={() => {
                imageRef.current.src = secondaryImg;
            } }
                onMouseOut={() => {
                    imageRef.current.src = primaryImg;
                } }
                src={primaryImg}
                alt=""
                ref={imageRef} />

        );
    }

    const ImageChangeOnMouseOver = () => {
        return (
          <div>
            <ImageToggleOnMouseOver
              primaryImg={ecoFriend}
              secondaryImg={ecoFlip}
              alt="" />
          </div>
        )
    }
    

    return( 
    <>
        <div className="residentail-hero">   
            <ul className="nav-bar">
                <Link className="link-text-logo" to={'/'}> <li><img src={zencoLogo} alt="" /></li> </Link>
                <Link className="link-text" to={'/commercial'}> <li>Commercial Services</li></Link>
                <Link className="link-text" to={'/about'}> <li>About</li> </Link>
                <Link className="link-text" to={'/reviews'}> <li>Reviews</li> </Link>
                <Link className="link-text-quote" to={'/quote'}> <li>Request a quote</li> </Link> 
            </ul> 
            <div className="res-services-slogan">
                <div>
                    <p>Zenco Coatings offers professional residential painting services, for all home surfaces. </p>
                </div>
                <div className="res-promo">
                    <p>--% promo offer</p>
                </div>
            </div>    
        </div> 
        <div className="res-service-card-container">
                <div className="res-service-card">
                    <img src={colorSelection} className="card-img-top" alt="color cards"/>
                    <div className="res-card-body">
                        <h5 className="res-card-title">Color Consultation</h5>
                        <p className="res-card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button type="button" className="btn btn-outline-dark" onClick={handleColorSelect} >Learn More</button>
                    </div>
                </div>  
            <div className="res-service-card">
                <img src={greenRoom} className="card-img-top" alt="interior painters"/>
                <div className="res-card-body">
                    <h5 className="res-card-title">Interior Painting</h5>
                    <p className="res-card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button onClick={handleColorSelect} type="button" className="btn btn-outline-dark">Learn More</button>
                </div>
            </div>  
            <div className="res-service-card">
                <img src={extPainter} className="card-img-top" alt="exterior painter"/>
                <div className="res-card-body">
                    <h5 className="res-card-title">Exterior Painting</h5>
                    <p className="res-card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button type="button" className="btn btn-outline-dark">Learn More</button>
                </div>
            </div>  
            <div className="res-service-card">
                <img src={woodFence} className="card-img-top" alt="wood deck"/>
                <div className="res-card-body">
                    <h5 className="res-card-title">Deck / Fence Staining</h5>
                    <p className="res-card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button type="button" className="btn btn-outline-dark">Learn More</button>
                </div>
            </div>  
            <div className="res-service-card">
                <img src={cabinets} className="card-img-top" alt="wood deck"/>
                <div className="res-card-body">
                    <h5 className="res-card-title">Cabinet Painting / Refacing</h5>
                    <p className="res-card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button type="button" className="btn btn-outline-dark">Learn More</button>
                </div>
            </div>  
            <div className="res-service-card">
                <img src={garage} className="card-img-top" alt="wood deck"/>
                <div className="res-card-body">
                    <h5 className="res-card-title">Garage Floors</h5>
                    <p className="res-card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button type="button" className="btn btn-outline-dark">Learn More</button>
                </div>
            </div>  
            <div className="res-service-card">
                <img src={drywall} className="card-img-top" alt="wood deck"/>
                <div className="res-card-body">
                    <h5 className="res-card-title">Drywall Repair</h5>
                    <p className="res-card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button type="button" className="btn btn-outline-dark">Learn More</button>
                </div>
            </div>  
            <div className="res-service-card">
                <img src={leadHazard} className="card-img-top" alt="wood deck"/>
                <div className="res-card-body">
                    <h5 className="res-card-title">EPA Lead Certified</h5>
                    <p className="res-card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button type="button" className="btn btn-outline-dark">Learn More</button>
                </div>
            </div>  
        </div>
        <div className="res-review-container">
            <div className="res-review">
                <p>Not only did Zenco Coatings exceed my expectations in terms of the quality of their work, but they also demonstrated excellent project management. They completed the project within the agreed-upon timeframe and budget, making the entire process seamless and stress-free for me.
                </p>

                <p>- Kona, Homeowner</p>
                <Link className="quote-banner" to={'/quote'}> <p>GET A FREE ESTIMATE</p> </Link>
            </div>
        </div>
        <div className="eco-friend-container">
            <div className="eco-statement">
                <ImageChangeOnMouseOver/>
                <p>Zenco Coatings is committed to both exceptional results and the environment, which is why we exclusively use environmentally friendly products that are zero or low VOC (Volatile Organic Compounds), ensuring a healthier and more sustainable painting experience for our clients and the planet</p>
            </div>
        </div>
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
        <div ref={refColorSelect} className="res-service-container">
            <img src={colorDesign} alt="color selection" />
            <div className="int-paint-content">
                <p>The interior painting process is designed to transform your living space into a beautifully refreshed and inviting environment. Here's what you can expect when you hire Zenco Coatings</p>
                <p><b>Consultation and Planning</b> Our interior painting service begins with a detailed consultation, where we take the time to understand your vision, preferences, and specific requirements. Whether you're looking for a modern, minimalist look or a cozy, traditional feel, we'll work closely with you to select the perfect colors and finishes that harmonize with your space. </p>
            </div>
        </div>
        <div className="res-service-container">
            <div className="int-paint-content">
                <p><b>Preparation</b> is the key to a flawless paint job, and we take great care in prepping your walls, ceilings, and trim. Our experienced painters meticulously patch holes, repair imperfections, and sand surfaces to ensure an even and smooth canvas for painting. We also take measures to protect your furniture, flooring, and belongings from any paint spills or splatters.</p>
            </div>
        <img src={plaster} alt="trowl and spakel" />
        </div>
        <div className="res-service-container">
        <img src={painterWall} alt="painter" />
            <div className="int-paint-content">
                <p>Using the highest quality paints and materials, our skilled team applies paint with precision and attention to detail. From the first brushstroke to the final touch-up, we take pride in our craftsmanship, creating a seamless and professional finish in every room. </p>
            </div>
        </div>
        <div className="res-service-container">
            <div className="int-paint-content">
                <p>At Zenco Coatings, we understand the value of your time and space. Our goal is to work efficiently while maintaining the highest level of quality, minimizing any disruption to your daily routine. Rest assured, we always leave your home in pristine condition after the project is completed. </p>
            </div>
        <img src={paintRoller} alt="painter" />
        </div>

       

        <div className="extra-space">
        <p>fin</p>
        </div>

        
    </>
    );
};

export default Residential;