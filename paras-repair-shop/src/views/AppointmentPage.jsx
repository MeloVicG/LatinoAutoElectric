import React, {useEffect} from 'react';
import AppointmentForm from '../components/AppointmentForm';
import styles from '../styles/AppointmentPage.module.scss';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';


const AppointmentPage = (props) => {
    const {appointments, setAppointments} = (props);

    return (
        <div className="wrapper">
            <h1 className={styles.titleBox}>Latinos Auto Electric</h1>
            <NavBar/>
            <div className={styles.banner}>
                <h1>Appointment</h1>
                <AppointmentForm 
                appointments={appointments}
                setAppointments={setAppointments}
                />
            </div>
            <Footer/>
        </div>
        
    )
}

export default AppointmentPage;