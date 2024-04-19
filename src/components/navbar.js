import React from "react";
import {Link, useLocation} from "react-router-dom";

function Navbar(){
    const location = useLocation();
    
    return(
        !location.pathname.includes('/signup')  ? (
            <div className="navbar">
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact Us</Link>
                <Link to="/signup">Sign Up</Link>
            </div>
        ): null
    )
}

export default Navbar;