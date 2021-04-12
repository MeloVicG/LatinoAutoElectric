import React, { useEffect, useState } from 'react';
import { Link } from "@reach/router";
import axios from 'axios';
import AdminNavBar from '../components/AdminNavBar';



const AppointmentDetailsPage = ({ selectedId }) => {

    const [selectedAppointment, setSelectedAppointment] = useState({});

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
            <div>
                <button>Update</button>|<button>Add Comments</button>|<button>Archive</button>|<button>Cancel</button>
            </div>
        </div>

    )
}

export default AppointmentDetailsPage;