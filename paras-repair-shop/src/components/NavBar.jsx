import React, { useState } from 'react';
import { Link } from '@reach/router';

const NavBar = ({appointments, setAppointments}) => {

    return (
        <div className="navBarParent">
            <nav className="navBar">
                <Link to="/" style={{textDecoration:"none"}}>Home</Link> 
                <Link to="/schedule" style={{textDecoration:"none"}}>Schedule</Link> 
                <Link to="/services" style={{textDecoration:"none"}}>Services</Link>  
                <Link to="/about" style={{textDecoration:"none"}}>About</Link>  
                {/* <Link to="/directions" style={{textDecoration:"none"}}>Location</Link>   */}
                {/* <Link to="/contact" style={{textDecoration:"none"}}>Contact</Link>   */}
                <Link to="/faq" style={{textDecoration:"none"}}>FAQ</Link>  
            </nav>
        </div>
    )
}

export default NavBar;