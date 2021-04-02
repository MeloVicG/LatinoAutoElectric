import React, { useState } from 'react';
import { Link } from '@reach/router';

const NavBar = ({appointments, setAppointments}) => {

    return (
        <div className="nav-bar-parent">
            <nav className="nav-bar">
                <Link to="/" style={{margin:"25px", textDecoration:"none"}}>Home</Link> 
                <Link to="/about" style={{margin:"25px", textDecoration:"none"}}>About</Link>  
                <Link to="/schedule" style={{margin:"25px", textDecoration:"none"}}>Schedule</Link> 
                <Link to="/services" style={{margin:"25px", textDecoration:"none"}}>Services</Link>  
                <Link to="/directions" style={{margin:"25px", textDecoration:"none"}}>Location</Link>  
                <Link to="/contact" style={{margin:"25px", textDecoration:"none"}}>Contact</Link>  
                <Link to="/faq" style={{margin:"25px", textDecoration:"none"}}>FAQ</Link>  
            </nav>
        </div>
    )
}

export default NavBar;