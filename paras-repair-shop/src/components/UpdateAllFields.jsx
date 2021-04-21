import React, { useEffect, useState } from 'react';
import { Link, navigate } from "@reach/router";
import axios from 'axios';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import AdminNavBar from './AdminNavBar';



const UpdateAllFields = ({ selectedAppointment, setSelectedAppointment }) => {

    const [firstName, setFirstName] = useState(`${selectedAppointment.firstName}`);
    const [lastName, setLastName] = useState(`${selectedAppointment.lastName}`);
    const [email, setEmail] = useState(`${selectedAppointment.email}`);
    const [phone, setPhone] = useState(`${selectedAppointment.phone}`);
    const [date, setDate] = useState(`${selectedAppointment.date}`);
    const [time, setTime] = useState(`${selectedAppointment.time}`);
    const [make, setMake] = useState(`${selectedAppointment.make}`);
    const [model, setModel] = useState(`${selectedAppointment.model}`);
    const [year, setYear] = useState(`${selectedAppointment.year}`);
    const [serviceType, setServiceType] = useState(`${selectedAppointment.serviceType}`);
    const [clientComments, setClientComments] = useState(`${selectedAppointment.clientComments}`);
    const [mechanicComments, setMechanicComments] = useState(`${selectedAppointment.mechanicComments}`);
    const [serviceComplete, setServiceComplete] = useState(false);

    const updateAppointment = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8080/api/appointments/' + selectedAppointment.id, {
            firstName,
            lastName,
            email,
            phone,
            date,
            time,
            make,
            model,
            year,
            serviceType,
            clientComments,
            mechanicComments,
            serviceComplete,
        }, [])
            .then(res => {
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

    return (
        <div>
            <h1>Update Appointment:</h1>
            <form onSubmit={updateAppointment}>
                {/* {validations.map((message, idx) => <p style={{ color: "red" }} className="err" key={idx}>{message}</p>)} */}
                <div>
                    <div >
                        <label>First Name:</label>
                        <div>
                            <input type="text" onChange={e => setFirstName(e.target.value)} value={firstName} />
                        </div>
                    </div>
                    <div >
                        <label>Last Name:</label>
                        <div>
                            <input type="text" onChange={e => setLastName(e.target.value)} value={lastName} />
                        </div>
                    </div>
                    <div >
                        <label>Email:</label>
                        <div>
                            <input type="email" onChange={e => setEmail(e.target.value)} value={email} />
                        </div>
                    </div>
                    <div >
                        <label>Phone Number:</label>
                        <div>
                            <input type="text" onChange={e => setPhone(e.target.value)} value={phone} />
                        </div>
                    </div>
                    <div >
                        <label>Select Date:</label>
                        {/* <Calendar onChange={e => setDate(e.target.value)} value={date} /> */}
                    </div>
                    <div>
                        <label>Select Time:</label>
                        <div>
                            <input type="text" onChange={e => setTime(e.target.value)} value={time} />
                        </div>
                    </div>
                    <div >
                        <label>Make:</label>
                        <input type="text" onChange={e => setMake(e.target.value)} value={make} />
                    </div>
                    <div >
                        <label>Model:</label>
                        <input type="text" onChange={e => setModel(e.target.value)} value={model} />
                    </div>
                    <div >
                        <label> Year:</label>
                        <input type="number" onChange={e => setYear(e.target.value)} value={year} />
                    </div>
                    <div >
                        <label>Additional Comments:</label>
                        <div>
                            <textarea onChange={e => setClientComments(e.target.value)} col="50" row="30" value={clientComments}></textarea>
                        </div>
                    </div>
                    <div >
                        <label>Mechanic Comments:</label>
                        <div>
                            <textarea onChange={e => setMechanicComments(e.target.value)} col="50" row="30" value={mechanicComments}></textarea>
                        </div>
                    </div>
                    <input type="submit" value="Update" />
                </div>
            </form>
        </div>

    )
}

export default UpdateAllFields;