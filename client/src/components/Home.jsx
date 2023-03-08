import React from "react";
import coverHouse from "../Images/coverHouse.jpeg";
import {Link} from "react-router-dom";


const Home = () => {
    const myStyle = {
        backgroundImage: `url(${coverHouse})`,
        height:'92vh',
        width: 'auto',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }
    return(
        <>
        <div style={myStyle}>
            {/* <div className="homeText">
                <h1>ZENCO STRUCTURES</h1>
                <p><Link to={'/residentialPainting'}>Residential Painting</Link></p>
                <p><Link to={'/commercialPainting'}>Commercial Painting</Link></p>
                <p><Link to={'/about'}>About</Link></p>
                <p><Link to={'/quote'}>Request a Quote</Link></p>       
            </div> */}
        </div>
        
        </>
    );
};

export default Home;