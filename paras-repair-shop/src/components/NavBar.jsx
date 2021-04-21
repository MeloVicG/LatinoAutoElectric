import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';
import styles from '../styles/NavBar.module.scss';

const NavBar = ({ page, setPage }) => {


    const [navigation, setNavigation] = useState([
        <Link className="activeNavBox" to="/" style={{ textDecoration: "none" }}>Home</Link>,
        <Link to="/schedule" style={{ textDecoration: "none" }}>Schedule</Link>,
        <Link to="/services" style={{ textDecoration: "none" }}>Services</Link>,
        <Link to="/about" style={{ textDecoration: "none" }}>About</Link>,
        <Link to="/faq" style={{ textDecoration: "none" }}>FAQ</Link>

    ]);

    const [activeNav, setActiveNav] = useState("")

    const handleNavSelect = (bar, idx) => {
        setActiveNav(idx);
        setNavigation(bar);
        console.log("bar? " + bar);
    };


    return (
        <div className="navBarParent">
            <nav className="navBar">
                {navigation.map((bar, idx) =>
                    <div onChange={e => handleNavSelect(bar, idx)} className={(idx === page ? styles.activeNavBox : styles.navBox)} key={idx}>
                        <p>{bar}</p>
                    </div>
                )}
            </nav>
        </div>
    )
}

export default NavBar;