import React, {useEffect} from 'react';
import AppointmentForm from '../components/AppointmentForm';


const AppointmentPage = () => {

    return (
        <div>
            <h1>Schedule Appointment</h1>
            <AppointmentForm />
            <h4>Contact us here with any questions or to schedule over the phone.</h4>
        </div>

    )
}

export default AppointmentPage;