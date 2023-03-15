import React from "react";
import coverHouse from "../Images/coverHouse.jpeg";
import {Link} from "react-router-dom";


const Home = () => {
    // const myStyle = {
    //     backgroundImage: `url(${coverHouse})`,
    //     height:'92vh',
    //     width: 'auto',
    //     fontSize:'50px',
    //     backgroundSize: 'cover',
    //     backgroundRepeat: 'no-repeat',
    // }
    return(
        <>
        <div className="homePage">   
           <h1>Color your world with our expertise.</h1>
        </div>
        
        </>
    );
};

export default Home;