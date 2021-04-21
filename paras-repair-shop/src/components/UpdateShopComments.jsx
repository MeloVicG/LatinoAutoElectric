import React, { useEffect, useState } from 'react';
import { navigate } from "@reach/router";
import axios from 'axios';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const UpdateShopComments = ({ selectedAppointment, setSelectedAppointment, handleComments, selectedId }) => {

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
        axios.put('http://localhost:8080/api/appointments/' + selectedId, {
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
                setSelectedAppointment({
                    "firstName": firstName,
                    "lastName": lastName,
                    "email": email,
                    "phone": phone,
                    "date": date,
                    "time": time,
                    "make": make,
                    "model": model,
                    "year": year,
                    "serviceType": serviceType,
                    "clientComments": clientComments,
                    "mechanicComments": mechanicComments,
                    "serviceComplete": serviceComplete,
                })
                handleComments();
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
            <h1>Update Comments:</h1>
            <form onSubmit={updateAppointment}>
                {/* {validations.map((message, idx) => <p style={{ color: "red" }} className="err" key={idx}>{message}</p>)} */}
                <div >
                    <label>Mechanic Comments:</label>
                    <div>
                        <textarea onChange={e => setMechanicComments(e.target.value)} col="100" row="50" value={mechanicComments}></textarea>
                    </div>
                </div>
                <input type="submit" value="Update" />
            </form>
        </div>

    )
}

export default UpdateShopComments;