import React from "react";
import coverHouse from "../Images/coverHouse.jpeg";
import {Link} from "react-router-dom";


const Home = () => {
    const myStyle = {
        backgroundImage: `url(${coverHouse})`,
        height:'100vh',
        width: 'auto',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }
    return(
        <>
        <div style={myStyle}>
            <div className="homeText">
                <h1>ZENCO STRUCTURES</h1>
                <p><Link to={"/residentialPainting"}>Residential Painting</Link></p>
                
            </div>
        </div>
        
        </>
    );
};

export default Home;