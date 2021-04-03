import React, {useEffect} from 'react';
import AppointmentForm from '../components/AppointmentForm';
import styles from './AppointmentPage.module.css';
import NavBar from '../components/NavBar';

const AppointmentPage = () => {

    return (
        <div className="wrapper">
            <h1 className="titleBox2">Latinos Auto Electric</h1>
            <NavBar/>
            <div className={styles.banner2}>
                <h1>Appointment</h1>
                <AppointmentForm />
            </div>
            <h4>Contact us here with any questions or to schedule over the phone.</h4>
        </div>

    )
}

export default AppointmentPage;