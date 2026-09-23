import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import RefreshCta from "./RefreshCta";
import redCouch from "../Images/redCouch.jpeg";
import cover from "../Images/cover.jpeg";
import colorPick from "../Images/colorPick.jpeg";
import drywall from "../Images/drywall.jpeg";
import paintRoller from "../Images/paintRoller.jpeg";
import painterOwner from "../Images/painterOwner.jpeg";
import epaCert from "../Images/epaCert.svg";
import leadSafe from "../Images/leadSafe.svg";
import Footer from "./Footer";

const interiorSteps = [
    {
      number: "01",
      title: "Color & Project Planning",
      image: colorPick,
      alt: "Homeowner selecting an interior paint color",
      description: "Once you've selected your colors, our project manager works with you to schedule your painting project around your home, routine, and availability."
    },
    {
      number: "02",
      title: "Protecting Your Home",
      image: cover,
      alt: "Furniture protected before interior painting",
      description: "Before painting begins, we carefully protect floors, furniture, fixtures, and surrounding surfaces."
    },
    {
      number: "03",
      title: "Surface Preparation",
      image: drywall,
      alt: "Wall being prepared before interior painting",
      description: "We clean and prepare surfaces, repair minor imperfections, fill holes, and sand rough areas before painting."
    },
    {
      number: "04",
      title: "Premium Paint & Application",
      image: paintRoller,
      alt: "Professional painter applying interior paint",
      description: "We use high-quality paints designed for durability, beautiful color, and a professional finish."
    },
    {
      number: "05",
      title: "Final Walkthrough",
      image: painterOwner,
      alt: "Painter completing final walkthrough with homeowner",
      description: "Once the project is complete, we'll walk through the space with you and address any final touch-ups."
    }
];

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
        <section className="int-paint">
            <div className="int-paint-container">
                <div className="int-paint-heading">
                    <span>Our Process</span>
                    <h2>What to Expect From Your Interior Painting Project</h2>
                    <p>
                        From choosing colors to the final walkthrough, we take care of
                        every detail to make painting your home as easy and stress-free
                        as possible.
                    </p>
                </div>
                <div className="int-paint-container">
                    {interiorSteps.map((step, index) => (
                        <div
                            className={`int-paint-content ${
                                index % 2 !== 0 ? "reverse" : ""
                            }`}
                            key={step.number}
                            >
                            <div className="int-paint-image">
                                <img src={step.image} alt={step.alt} />
                            </div>
                            <div className="int-paint-text">
                                <span className="step-number">{step.number}</span>
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                                </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        <section className="interior-safety">
          <div className="interior-safety__container">
            <div className="interior-safety__content">
              <p className="interior-safety__eyebrow">
                Painting With Your Home in Mind
              </p>

              <h2>Your Home Deserves More Than a Good Paint Job</h2>

              <p className="interior-safety__intro">
                Interior painting happens where your family lives, sleeps, cooks,
                and spends its time. That&apos;s why the products we use and the way
                we prepare your home matter just as much as the finished color.
              </p>

              <div className="interior-safety__items">
                <div className="interior-safety__item">
                  <h3>EPA Lead-Safe Certified</h3>
                  <p>
                    We are an EPA Lead-Safe Certified Firm, and our painters are
                    trained and certified in lead-safe practices. For homes where
                    lead-based paint may be present, we follow the proper procedures
                    to help minimize dust and protect your home throughout the
                    painting process.
                  </p>
                </div>

                <div className="interior-safety__item">
                  <h3>Low &amp; No VOC Paint Options</h3>
                  <p>
                    We offer low and no VOC products that help reduce paint odors
                    and airborne chemicals inside your home without sacrificing a
                    beautiful, durable finish.
                  </p>
                </div>

                <div className="interior-safety__item">
                  <h3>Proper Prep From Start to Finish</h3>
                  <p>
                    A lasting paint job starts with the right preparation. We
                    protect surrounding surfaces, address imperfections, properly
                    prepare walls and trim, use the right products for each surface,
                    and inspect the finished work before the job is complete.
                  </p>
                </div>
              </div>

              <p className="interior-safety__closing">
                Because a beautiful finish should also come with peace of mind.
              </p>
            </div>
          </div>
          <div className="interior-safety__certifications">
          <img
            src={epaCert}
            alt="EPA Lead-Safe Certified"
            className="interior-safety__logo"
          />

          <img
            src={leadSafe}
            alt="EPA Lead-Safe Certified Firm"
            className="interior-safety__logo"
          />
        </div>
        </section>
        <RefreshCta/>
        <Footer/> 
        </>
    )
}

export default IntPaint;