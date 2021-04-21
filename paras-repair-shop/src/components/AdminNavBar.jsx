import React, { useState } from 'react';
import { navigate, Link } from '@reach/router';
import styles from '../styles/NavBar.module.scss';

// import CarLogo from '../components/CarLogo'

const AdminNavBar = ({ page, setPage }) => {

    const [adminNav, setAdminNav] = useState([
        <Link className="activeNavBox" to="/dashboard" style={{ textDecoration: "none" }}>Dashboard</Link>,
        <Link to="/search" style={{ textDecoration: "none" }}>Search Appointments</Link>,
        <Link to="/archive" style={{ textDecoration: "none" }}>Archive</Link>,
    ]);
    const [activeNav, setActiveNav] = useState("")

    const handleNavSelect = (bar, idx) => {
        setActiveNav(idx);
        setAdminNav(bar);
        console.log("bar? " + bar);
    };

    const logout = (e) => {
        localStorage.removeItem("user");
        alert("Log out successful!");
        navigate("/admin");
    };

    return (
        <div className="navBarParent">
            <nav className="navBar">
                {adminNav.map((bar, idx) =>
                    //when choosing another navbox, page refreshes therfore does not highlight background?
                    <div onChange={e => handleNavSelect(bar, idx)} className={(idx === page ? styles.activeNavBox : styles.navBox)} key={idx}>
                        <p>{bar}</p>
                    </div>
                )}
            </nav>
            <div className={styles.logoutWrapper}>
                <button className={styles.logout} onClick={logout}>Log Out</button>
            </div>
        </div>
    )
}

export default AdminNavBar;