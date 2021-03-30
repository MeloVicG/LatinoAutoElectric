import React, {useEffect} from 'react';
import AppointmentForm from '../components/AppointmentForm';


const AppointmentPage = () => {

    return (
        <div>
            <nav style={{backgroundColor:"rgb(18,151,210)"}}>
                <a className="navBarHome"href=""> Home </a> 
                <a href="" style={{margin:"25px"}}> Schedule </a> 
                <a href="" style={{margin:"25px"}}> Services </a> 
                <a href="" style={{margin:"25px"}}> About / Staff </a> 
                <a href="" style={{margin:"25px"}}> Contact / Location </a> 
                <a href="" style={{margin:"25px"}}> FAQ </a> 
            </nav>
            <div className="banner">
                <h1>Schedule Appointment</h1>
                <AppointmentForm />
            </div>
            <h4>Contact us here with any questions or to schedule over the phone.</h4>
        </div>

    )
}

export default AppointmentPage;