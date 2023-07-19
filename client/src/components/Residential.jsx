import React from "react";
import { Link } from "react-router-dom";
import intPainters from "../Images/intPainters.jpeg"
import extPainter from "../Images/extPainter.jpeg";
import colorSelection from "../Images/colorSelection.jpeg";
import woodDeck from "../Images/woodDeck.jpeg";
import zencoLogo from "../Images/zencoLogo.png";
 




const Residential = () => {
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
                    <p>Zenco Structures offers professional residential painting services, for all home surfaces. </p>
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
                        <button type="button" class="btn btn-outline-dark" >Learn More</button>
                    </div>
                </div>  
            <div className="res-service-card">
                <img src={intPainters} className="card-img-top" alt="interior painters"/>
                <div className="res-card-body">
                    <h5 className="res-card-title">Interior Painting</h5>
                    <p className="res-card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button type="button" class="btn btn-outline-dark">Learn More</button>
                </div>
            </div>  
            <div className="res-service-card">
                <img src={extPainter} className="card-img-top" alt="exterior painter"/>
                <div className="res-card-body">
                    <h5 className="res-card-title">Exterior Painting</h5>
                    <p className="res-card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button type="button" class="btn btn-outline-dark">Learn More</button>
                </div>
            </div>  
            <div className="res-service-card">
                <img src={woodDeck} className="card-img-top" alt="wood deck"/>
                <div className="res-card-body">
                    <h5 className="res-card-title">Deck Staining</h5>
                    <p className="res-card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button type="button" class="btn btn-outline-dark">Learn More</button>
                </div>
            </div>  
        </div>
        

        
    </>
    );
};

export default Residential;