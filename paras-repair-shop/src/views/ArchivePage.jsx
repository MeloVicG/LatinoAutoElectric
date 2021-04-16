import React, { useState, useEffect } from 'react';
import AppointmentList from '../components/AppointmentList';
import AdminNavBar from '../components/AdminNavBar';
import SearchBar from '../components/SearchBar';
import axios from 'axios';
import styles from '../styles/SearchDisplay.module.scss';



const ArchivePage = ({ appointments, setAppointments, selectedId, setSelectedId, appointmentList, setAppointmentList }) => {
    const [input, setInput] = useState('');
    const [appointmentListDefault, setAppointmentListDefault] = useState();

    const updateInput = (input) => {
        console.log("appointments: " + appointments);
        let completedAppointments = appointments.filter(appoint => {
            return appoint.serviceComplete !== null;
        })
        const filtered = completedAppointments.filter(appoint => {
            return appoint.email.includes(input);
        })
        setInput(input);
        setAppointmentList(filtered);
    }


    return (
        <>
            <h1>Latinos Auto Electric Admin</h1>
            <AdminNavBar />
            <h1>Archived Appointments</h1>
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

export default ArchivePage;