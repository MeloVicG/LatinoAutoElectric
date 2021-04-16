import React, { useEffect, useState } from 'react';
import { Link, navigate } from "@reach/router";
import axios from 'axios';
import AdminNavBar from '../components/AdminNavBar';
import UpdateShopComments from '../components/UpdateShopComments';




const AppointmentDetailsPage = ({ selectedId, selectedAppointment, setSelectedAppointment, appointments, setAppointments }) => {

    const [showForm, setShowForm] = useState(false);
    const [buttonName, setButtonName] = useState("Add Comments");

    useEffect(() => {
        axios.get("http://localhost:8080/api/appointments/" + selectedId)
            .then(res => {
                let data = res.data;
                setSelectedAppointment(data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    let hidden = <></>;

    const handleComments = () => {
        if (buttonName === "Add Comments") {
            setShowForm(true);
            setButtonName("Hide Form");
        } else {
            setShowForm(false);
            setButtonName("Add Comments");

        }
    }


    const handleServiceComplete = (e) => {
        // prompt("Are you sure service has been completed for this customer?");
        e.preventDefault();
        let newAppoint = { ...selectedAppointment };
        newAppoint.serviceComplete = true;
        axios.put("http://localhost:8080/api/appointments/" + selectedId, {
            ...newAppoint
        }, [])
            .then(res => {
                setSelectedAppointment(newAppoint);
                navigate("/appointment-details");
            })
            .catch((err) => {
                console.log(err);
                // const { errors } = err.response.data;
                // const messages = Object.keys(errors).map(err => errors[err].message);
                // setValidations([...validations, messages])
                // setValidations(messages)
            })
    }

    const removeAppointment = (appointmentId) => {
        setAppointments(appointments.filter(appoint => appoint.id !== appointmentId));

    }

    const handleDelete = (id) => {
        if (window.confirm(`Delete ${selectedAppointment.time} appointment on ${selectedAppointment.date}?`)) {
            axios.delete('http://localhost:8080/api/appointments/' + id)
                .then(res => {
                    removeAppointment(id);
                })
                .catch((err) => {
                    console.log(err);
                })
            navigate('/dashboard');
        }

    }
    return (
        <div>
            <h1>Latinos Auto Electric Admin</h1>
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
            {selectedAppointment.serviceComplete === true ? <p>Service Complete!</p> : <></>}
            <div>
                <Link to="/update-all-fields"><button>Update</button></Link> |<button onClick={handleComments}>{buttonName}</button> |
                <button onClick={handleServiceComplete}>Complete</button> | <button onClick={(e) => handleDelete(selectedAppointment.id)}>Delete</button>
            </div>
            {showForm ?
                <div>
                    <UpdateShopComments mechanicComments={selectedAppointment.mechanicComments} selectedAppointment={selectedAppointment} setSelectedAppointment={setSelectedAppointment} selectedId={selectedId} handleComments={handleComments} />
                </div> : <></>}
        </div>

    )
}

export default AppointmentDetailsPage;