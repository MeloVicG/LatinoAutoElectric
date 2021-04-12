import React, { useEffect, useState } from 'react';
import { Link } from "@reach/router";
import axios from 'axios';
import AdminNavBar from '../components/AdminNavBar';
import UpdateShopComments from '../components/UpdateShopComments';



const AppointmentDetailsPage = ({ selectedId, selectedAppointment, setSelectedAppointment }) => {

    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8080/api/appointments/" + selectedId)
            .then(res => {
                let details = res.data;
                setSelectedAppointment(details);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);
    let hidden = <></>;
    const handleComments = () => {
        setShowForm(true);
    }

    const handleHideComments = () => {
        setShowForm(false);
    }

    const handleServiceComplete = () => {
        alert("Are you sure service has been completed for this customer?");
    }

    return (
        <div>
            <AdminNavBar />
            <h1>Appointment</h1>
            <h3>{selectedAppointment.date} - {selectedAppointment.time}</h3>
            <p>{selectedAppointment.firstName} {selectedAppointment.lastName}</p>
            <p>{selectedAppointment.phone}</p>
            <p>{selectedAppointment.email}</p>
            <p>{selectedAppointment.make} {selectedAppointment.model} {selectedAppointment.year}</p>
            <p>{selectedAppointment.serviceType}</p>
            <p>{selectedAppointment.clientComments}</p>
            <p>{selectedAppointment.mechanicComments}</p>
            <div>
                <Link to="/update-all-fields"><button>Update</button></Link> |<button onClick={handleComments}>Add Comments</button> |
                <button onClick={handleServiceComplete}>Complete</button> | <button>Delete</button>
            </div>
            {showForm ?
                <div>
                    <UpdateShopComments mechanicComments={selectedAppointment.mechanicComments} selectedAppointment={selectedAppointment} />
                    <button onClick={handleHideComments}>Hide Comment Form</button>
                </div> : <></>}
        </div>

    )
}

export default AppointmentDetailsPage;