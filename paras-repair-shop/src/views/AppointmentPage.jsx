import React, { useEffect } from 'react';
import AppointmentForm from '../components/AppointmentForm';
import styles from '../styles/AppointmentPage.module.scss';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Link } from '@reach/router';


const AppointmentPage = ({ appointments, setAppointments }) => {

    return (
        <div className="wrapper">
            <h1 className={styles.titleBox}>Latinos Auto Electric</h1>
            {/* <NavBar /> */}
                <Link  to="/" style={{textDecoration:"none"}}>Home</Link>,
                <Link className="currentNav" to="/schedule" style={{textDecoration:"none"}}>Schedule</Link>,
                <Link to="/services" style={{textDecoration:"none"}}>Services</Link>,
                <Link to="/about" style={{textDecoration:"none"}}>About</Link>,
                <Link to="/faq" style={{textDecoration:"none"}}>FAQ</Link>
            <div className={styles.banner}>
                <h1>Appointment</h1>
                <AppointmentForm appointments={appointments} setAppointments={setAppointments} />
            </div>
            <Footer />
        </div>

    )
}

export default AppointmentPage;