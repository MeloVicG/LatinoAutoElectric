import React, { useEffect } from 'react';
import NavBar from '../components/NavBar';


const LocationPage = () => {

    return (
        <div>
            <h1 className="titleBox-2">Latinos Auto Electric</h1>
            <NavBar />
            <div className="banner">
                <h1>Success!</h1>
                <div>
                    <h3>Appointment Scheduled!</h3>
                    <p>Please arrive on time at our location. Call to update or change appointment. You should receive an email with all of your appointment information. If you do not, please call our shop. Thank you!</p>
                </div>
            </div>
        </div>

    )
}

export default LocationPage;