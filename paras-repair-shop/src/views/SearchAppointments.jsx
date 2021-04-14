import React, { useState, useEffect } from 'react';
import AppointmentList from '../components/AppointmentList';
import AdminNavBar from '../components/AdminNavBar';
import SearchBar from '../components/SearchBar';
import axios from 'axios';
import styles from '../styles/SearchDisplay.module.scss';



const SearchAppointments = ({ appointments, setAppointments, selectedId, setSelectedId, appointmentList, setAppointmentList }) => {
    const [input, setInput] = useState('');
    const [appointmentListDefault, setAppointmentListDefault] = useState();

    // useEffect(() => {
    //     axios.get("http://localhost:8080/api/appointments/")
    //         .then(res => {
    //             let data = res.data;
    //             setAppointmentList(data);
    //             setAppointmentListDefault(data);
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         })
    // }, []);
    const updateInput = (input) => {
        const filtered = appointments.filter(appoint => {
            return appoint.email.includes(input) && appoint.serviceComplete === false;
        })
        setInput(input);
        setAppointmentList(filtered);
    }


    return (
        <>
            <h1>Latinos Auto Electric Admin</h1>
            <AdminNavBar />
            <h1>Appointment List</h1>
            <SearchBar input={input} updateInput={updateInput} onChange={updateInput} />
            {input.length > 0 ?
                <div className={styles.listDisplay}>
                    <AppointmentList appointmentList={appointmentList} selectedId={selectedId} setSelectedId={setSelectedId} />
                </div> :
                <></>
            }
        </>
    );
}

export default SearchAppointments;