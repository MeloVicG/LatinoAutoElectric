import React, { useState } from 'react';
import { Link } from '@reach/router';
// import CarLogo from '../components/CarLogo'

const AdminNavBar = () => {

    return (
        <div className="navBarParent">
            <nav className="navBar">
                {/* <CarLogo />  */}
                <Link to="/dashboard" style={{ textDecoration: "none" }}>Home</Link>
                <Link to="/search" style={{ textDecoration: "none" }}>Search Appointments</Link>
                <Link to="/archive" style={{ textDecoration: "none" }}>Archive</Link>
            </nav>
        </div>
    )
}

export default AdminNavBar;