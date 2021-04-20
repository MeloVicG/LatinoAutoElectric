import React, { useEffect } from 'react';
import AppointmentForm from '../components/AppointmentForm';
import styles from '../styles/AppointmentPage.module.scss';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Link } from '@reach/router';


const AppointmentPage = ({ appointments, setAppointments, page, setPage }) => {

    useEffect(() => {
        setPage(1)
    }, []);

    return (
        <div className="wrapper">
            <h1 className={styles.titleBox}>Latinos Auto Electric</h1>
            <NavBar page={page}/>

            <div className={styles.banner}>
                <h1>Appointment</h1>
                <AppointmentForm appointments={appointments} setAppointments={setAppointments} />
            </div>
            <Footer />
        </div>

    )
}

export default AppointmentPage;