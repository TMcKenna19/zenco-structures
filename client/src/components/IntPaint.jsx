import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import redCouch from "../Images/redCouch.jpeg";
import cover from "../Images/cover.jpeg";
import colorPick from "../Images/colorPick.jpeg";
import drywall from "../Images/drywall.jpeg";
import paintRoller from "../Images/paintRoller.jpeg";
import painterOwner from "../Images/painterOwner.jpeg";
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
        <div className="int-paint-cta">
            <h2>Ready to Refresh Your Home?</h2>
            <p>
                Tell us about your interior painting project and we'll help you
                determine the next steps.
            </p>
            <Link className="" to={'/quote'}>
            <p>Get Your Free Estimate</p></Link>
        </div>
        <Footer/> 
        </>
    )
}

export default IntPaint;