import { Link } from '@reach/router';
import React from 'react';
import styles from '../styles/Display.module.scss';

const Display = ({appointments}) => {

    return (

        <div>
            {
                appointments.map((appoint, idx) =>
                    <div key={idx} className={styles.appointment}>
                        <div >
                            <h3>Client Info:</h3>
                                <div className={styles.appointRow}>
                                    <h4>First Name: </h4>
                                    <p>{appoint.firstName}</p>
                                </div>
                                <div className={styles.appointRow}>
                                    <h4>Last Name: </h4>
                                    <p>{appoint.lastName}</p>
                                </div>
                                <div className={styles.appointRow}>
                                    <h4>Email: </h4>
                                    <p>{appoint.email}</p>
                                </div>
                                <div className={styles.appointRow}>
                                    <h4>Phone: </h4>
                                    <p>{appoint.phone}</p>
                                </div>
                        </div>
                        <div>
                        <h3>Appointment Date/Time:</h3>
                                <div className={styles.appointRow}>
                                <h4>Date: </h4>
                                    <p>{appoint.date}</p>
                                </div>
                                <div className={styles.appointRow}>
                                <h4>Time: </h4>
                                    <p>{appoint.time}</p>
                                </div>
                        </div>
                        <div>
                            <h3>Service Info:</h3>
                            <div className={styles.appointRow}>
                            <h4>Vehicle Make: </h4>
                                <p>{appoint.make}</p>
                            </div>
                            <div className={styles.appointRow}>
                            <h4>Vehicle Model: </h4>
                                <p>{appoint.model}</p>
                            </div>
                            <div className={styles.appointRow}>
                            <h4>Vehicle Year: </h4>
                                <p>{appoint.year}</p>
                            </div>
                            <div className={styles.appointRow}>
                            <h4>Services Needed: </h4>
                                <p>{appoint.serviceType}</p>
                            </div>
                            <div className={styles.appointRow}>
                            <h4>Additional Info: </h4>
                                <p>{appoint.clientComments}</p>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>

    )
}

export default Display;