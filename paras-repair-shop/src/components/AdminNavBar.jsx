import React, { useState } from 'react';
import { Link } from '@reach/router';
// import CarLogo from '../components/CarLogo'

const AdminNavBar = () => {

    return (
        <div className="navBarParent">
            <nav className="navBar">
                {/* <CarLogo />  */}
                <Link to="/dashboard" style={{textDecoration:"none"}}>Home</Link> 
                <Link to="/daily-appointment" style={{textDecoration:"none"}}>Daily Schedule</Link> 
                <Link to="/appointment-details" style={{textDecoration:"none"}}>Appointment Details</Link>  
                <Link to="/archive" style={{textDecoration:"none"}}>Archive</Link>  
            </nav>
        </div>
    )
}

export default AdminNavBar;