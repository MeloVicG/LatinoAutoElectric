import React, {useEffect} from 'react';
import AppointmentForm from '../components/AppointmentForm';
import NavBar from '../components/NavBar';

const AppointmentPage = () => {

    return (
        <div>
            <h1 className="titleBox-2">Latinos Auto Electric</h1>
            <NavBar/>
            <div className="banner">
                <h1>Appointment</h1>
                <AppointmentForm />
            </div>
            <h4>Contact us here with any questions or to schedule over the phone.</h4>
        </div>

    )
}

export default AppointmentPage;