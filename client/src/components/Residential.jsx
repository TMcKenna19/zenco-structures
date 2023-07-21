import React from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import extPainter from "../Images/extPainter.jpeg";
import colorSelection from "../Images/colorSelection.jpeg";
import woodDeck from "../Images/woodDeck.jpeg";
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


const Residential = () => {
    // onClick scroll 
    const ref = useRef(null);
    const handleClick = () => {
        ref.current?.scrollIntoView({behavior: 'auto'});
    };

    //Image flip 
    const ImageToggleOnMouseOver = ({primaryImg, secondaryImg}) => {
        const imageRef = useRef(null);
      
        return (
          <img onMouseOver={() => { 
              imageRef.current.src = secondaryImg; 
            }}
            onMouseOut={() => {
                imageRef.current.src= primaryImg;
              }}
            src={primaryImg} 
            alt=""
            ref={imageRef}
          />
          
        )
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
                        <p className="res-card-text">Work with our in house design team to find the perfect color palette that highlights your home's personality</p>
                        <button type="button" className="btn btn-outline-dark" onClick={handleClick} >Learn More</button>
                    </div>
                </div>  
            <div className="res-service-card">
                <img src={greenRoom} className="card-img-top" alt="interior painters"/>
                <div className="res-card-body">
                    <h5 className="res-card-title">Interior Painting</h5>
                    <p className="res-card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button type="button" className="btn btn-outline-dark">Learn More</button>
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
                <img src={woodDeck} className="card-img-top" alt="wood deck"/>
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
        <div className="eco-friend">
            <div className="eco-statement">
                <ImageChangeOnMouseOver/>
                <p>Zenco Coatings is committed to both exceptional results and the environment, which is why we exclusively use environmentally friendly products that are zero or low VOC (Volatile Organic Compounds), ensuring a healthier and more sustainable painting experience for our clients and the planet</p>
            </div>
        </div>
        <div className="priority-container">
            <div className="priority-card-title">
            </div>
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


        <div ref={ref} className="color-selection-container">
            <p>Color selection with the pros</p>
        </div>
       
        
        

        
    </>
    );
};

export default Residential;