import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import RefreshCta from "./RefreshCta";
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
import insureIcon from "../Images/insureIcon.jpeg";
import warrantyIcon from "../Images/warrantyIcon.jpeg";
import trustedIcon from "../Images/trustedIcon.jpeg";
import chatIcon from "../Images/chatIcon.jpeg";
import dollarIcon from "../Images/dollarIcon.jpeg";
import bulbIcon from "../Images/bulbIcon.jpeg";
import fauxfinish from "../Images/fauxfinish.jpg";
import Footer from "./Footer";

const residentialServices = [
    {
      id: 1,
      title: "Color Consultation",
      image: colorSelection,
      alt: "color cards",
      description:
        "Find the perfect palette for your space with professional color guidance tailored to your style.",
      link: "/colorconsult",
    },
    {
      id: 2,
      title: "Interior Painting",
      image: greenRoom,
      alt: "interior painters",
      description:
        "Refresh your home with professional interior painting that delivers clean lines, smooth finishes, and lasting results.",
      link: "/interiorpaint",
    },
    {
      id: 3,
      title: "Exterior Painting",
      image: extPainter,
      alt: "exterior painter",
      description:
        "Protect and refresh your home’s exterior with professional painting designed for a beautiful, durable finish.",
      link: "/exteriorpaint",
    },
    {
      id: 4,
      title: "Deck / Fence Staining",
      image: woodFence,
      alt: "wood deck",
      description:
        "Restore and protect your outdoor wood with professional staining that enhances its natural beauty and helps it stand up to the elements.",
      link: "/deckfence",
    },
    {
      id: 5,
      title: "Cabinet Painting / Refacing",
      image: cabinets,
      alt: "painted cabinets",
      description:
        "Give your kitchen or bathroom a fresh new look with professional cabinet painting and resurfacing for a smooth, durable finish.",
      link: "/cabinets",
    },
    {
      id: 6,
      title: "Garage Floors",
      image: garage,
      alt: "garage floor",
      description:
        "Upgrade your garage with a durable floor coating that creates a clean, polished look built to handle everyday wear.",
      link: "/garagefloors",
    },
    {
      id: 7,
      title: "Drywall Repair",
      image: trowl,
      alt: "drywall repair",
      description:
        "Repair cracks, holes, and damaged drywall for a smooth, seamless surface that’s ready for paint.",
      link: "/drywall",
    },
    {
      id: 8,
      title: "EPA Lead Certified",
      image: leadHazard,
      alt: "lead test",
      description:
        "Safely address old lead-based paint with EPA lead-certified removal and careful preparation to protect your home and create a clean surface for repainting.",
      link: "/leadtest",
    },
];

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
              {residentialServices.map((service) => (
                <Link
                  to={service.link}
                  className="res-service-card"
                  key={service.id}
                >
                  <img
                    src={service.image}
                    className="card-img-top"
                    alt={service.alt}
                  />

                  <div className="res-card-body">
                    <h5 className="res-card-title">
                      {service.title}
                    </h5>

                    <p className="res-card-text">
                      {service.description}
                    </p>

                    <span className="btn btn-outline-dark">
                      Learn More
                    </span>
                  </div>
                </Link>
              ))}
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
        <section className="testimonial-section">
          <div className="testimonial-card">
            <div className="testimonial-image-wrapper">
              <img
                src={fauxfinish}
                alt="Freshly painted residential home interior"
                className="testimonial-image"
              />
              <div className="project-label">
                <strong>Interior Faux Finish</strong>
                <span>Lido Key, FL</span>
              </div>
            </div>
            <div className="testimonial-content">
              <p className="testimonial-eyebrow">
                What Homeowners Are Saying
              </p>
              <h2>The kind of paint job you can’t stop looking at.</h2>
              <div
                className="testimonial-stars"
                aria-label="5 out of 5 stars"
              >
                ★★★★★
              </div>
              <blockquote>
              “The faux finish turned out even better than we imagined. The texture and depth add so much character to the space, and the attention to detail was incredible. It completely transformed the room and gave it the look and feel we were hoping for.”
              </blockquote>
              <div className="testimonial-footer">
                <div className="testimonial-customer">
                  <div>
                    <p className="customer-name">Kona P.</p>
                    <p className="customer-details">
                     Interior Faux Finish <span>•</span> Lido Key, FL
                    </p>
                  </div>
                </div>
                <Link to={"/reviews"} className="testimonial-button">
                  See More Reviews
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <RefreshCta/>
        <Footer/> 
    </>
    );
};

export default Residential;