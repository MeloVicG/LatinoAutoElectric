import React, { useEffect, useState } from 'react';
import { navigate } from "@reach/router";
import styles from '../styles/Calendar.module.scss';

const AppointmentList = ({ appointmentList, selectedId, setSelectedId }) => {

    const handleSelection = (id) => {
        setSelectedId(id);
        navigate("/appointment-details");
    }

    return (
        <>
            {/* We need Pagination */}
            {appointmentList ?
                appointmentList.map((appoint) =>
                    <div className={styles.appointmentGroup} onClick={() => handleSelection(`${appoint.id}`)} key={appoint.id}>
                        <div className={styles.appointmentLeft}>
                            <p>{appoint.date} - {appoint.time}</p>
                        </div>
                        <div className={styles.appointmentRight}>
                            <p>{appoint.firstName} {appoint.lastName}</p>
                            <p>{appoint.phone}</p>
                        </div>
                    </div>
                ) : <div><p>Search by email</p></div>
            }
        </>
    );
}

export default AppointmentList;