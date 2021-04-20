import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';
// import CarLogo from '../components/CarLogo'

import styles from '../styles/NavBar.module.scss'

const NavBar = ({page, setPage}) => {


    const [navigation, setNavigation] = useState([
        <Link className="activeNavBox" to="/" style={{textDecoration:"none"}}>Home</Link>,
        <Link to="/schedule" style={{textDecoration:"none"}}>Schedule</Link>,
        <Link to="/services" style={{textDecoration:"none"}}>Services</Link>,
        <Link to="/about" style={{textDecoration:"none"}}>About</Link>,
        <Link to="/faq" style={{textDecoration:"none"}}>FAQ</Link>
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
                //when choosing another navbox, page refreshes therfore does not highlight background?
                    <div onChange={e => handleNavSelect(bar, idx)} className={(idx === page ? styles.activeNavBox : styles.navBox)} key={idx}>
                        <p>{bar}</p>
                    </div>
                )}
            </nav>

                {/* <Link to="/" style={{textDecoration:"none"}}>Home</Link>  */}
                {/* <Link to="/schedule" style={{textDecoration:"none"}}>Schedule</Link>  */}
                {/* <Link to="/services" style={{textDecoration:"none"}}>Services</Link>   */}
                {/* <Link to="/about" style={{textDecoration:"none"}}>About</Link>   */}
                {/* <Link to="/directions" style={{textDecoration:"none"}}>Location</Link>   */}
                {/* <Link to="/contact" style={{textDecoration:"none"}}>Contact</Link>   */}
                {/* <Link to="/faq" style={{textDecoration:"none"}}>FAQ</Link>   */}
        </div>
    )
}

export default NavBar;