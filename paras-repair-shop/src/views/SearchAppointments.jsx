import React, { useState, useEffect } from 'react';
import { navigate } from '@reach/router';
import AppointmentList from '../components/AppointmentList';
import AdminNavBar from '../components/AdminNavBar';
import SearchBar from '../components/SearchBar';
import axios from 'axios';
import styles from '../styles/SearchDisplay.module.scss';



const SearchAppointments = ({ appointments, setAppointments, selectedId, setSelectedId, appointmentList, setAppointmentList, page, setPage }) => {
    const [input, setInput] = useState('');
    const [appointmentListDefault, setAppointmentListDefault] = useState();
    const user = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {
        if (user && user.accessToken) {
            axios.get("http://localhost:8080/api/appointments/")
                .then(res => {
                    let data = res.data;
                    setAppointmentList(data);
                    setAppointmentListDefault(data);
                    setPage(1);
                })
                .catch(err => {
                    console.log(err);
                })
        } else {
            navigate("/admin");
        }
    }, []);

    const updateInput = (input) => {
        let completedAppointments = appointments.filter(appoint => {
            return appoint.serviceComplete !== true;
        })
        const filtered = completedAppointments.filter(appoint => {
            return appoint.lastName.includes(input);
        })
        setInput(input);
        setAppointmentList(filtered);
    }


    return (
        <>
            <h1>Latinos Auto Electric Admin</h1>
            <AdminNavBar page={page} />
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