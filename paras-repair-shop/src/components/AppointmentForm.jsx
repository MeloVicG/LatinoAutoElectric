import React, { useState } from 'react';
import styles from '../styles/AppointmentForm.module.scss';

const AppointmentForm = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [vehicleType, setVehicleType] = useState("");
    const [vehicleYear, setVehicleYear] = useState("");
    const [reason, setReason] = useState("");
    const [comments, setComments] = useState("");

    const [validations, setValidations] = useState([]);

    let vehicleList = ["Honda - Accord", "Honda - Civic", "Honda - CRV"];
    let optionList = [];
    for(let i = 0; i < vehicleList.length; i++){
        optionList.push(<option value={"vehicleList[i]"} key={i}>vehicleList[i]</option>);
    };

    return (
        <div>
            <form className={styles.appointmentForm} >
                {validations.map((message, idx) => <p style={{ color: "red" }} className="err" key={idx}>{message}</p>)}
                <div className={styles.apFormTop}>
                    <label className={styles.formHeading}>Contact Info:</label>
                    <div className={styles.formSection}>
                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label>First Name:</label>
                                <div>
                                    <input type="text" onChange={e => setFirstName(e.target.value)}/>
                                </div>
                            </div>
                            <div className={styles.formGroup}>
                                <label>Last Name:</label>
                                <div>
                                    <input type="text" onChange={e => setLastName(e.target.value)}/>
                                </div>
                            </div>
                        </div>
                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label>Email:</label>
                                <div>
                                    <input type="email" onChange={e => setEmail(e.target.value)}/>
                                </div>
                            </div>
                            <div className={styles.formGroup}>
                                <label>Phone Number:</label>
                                <div>
                                    <input type="text" onChange={e => setPhone(e.target.value)}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <label className={styles.formHeading}>Appointment Time:</label>
                    <div className={styles.formSection}>
                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label>Select Date:</label>
                                <div>
                                    <input type="date" onChange={e => setDate(e.target.value)}/>
                                </div>
                            </div>
                            <div className={styles.formGroup}>
                                <label>Select Time:</label>
                                <div>
                                    <input type="time" onChange={e => setTime(e.target.value)}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <label className={styles.formHeading}>Vehicle Info:</label>
                    <div className={styles.formSection}>
                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label>Make:</label>
                                <input type="text" onChange={e => setPhone(e.target.value)}/>
                            </div>
                            <div className={styles.formGroup}>
                                <label>Model:</label>
                                <input type="text" onChange={e => setPhone(e.target.value)}/>
                            </div>
                            <div className={styles.formGroup}>
                                <label> Year:</label>
                                <input type="number" onChange={e => setPhone(e.target.value)}/>
                            </div>
                        </div>
                    </div>
                    <label className={styles.formHeading}>Helpful Info:</label>
                    <div className={styles.formSection}>
                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label>Reason for Visit:</label>
                                <div>
                                    <select id="vehicle" onChange={e => setVehicleType(e.target.value)}>
                                        <option value=""></option>
                                        <option value="Oil Change">Oil Change</option>
                                    </select> 
                                </div>
                            </div>
                            <div className={styles.formGroup}>
                                <label>Additional Comments:</label>
                                <div>
                                    <textarea onChange={e => setTime(e.target.value)} col="50" row="30" placeholder="Please fill in any information that was listed as other here."></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={styles.confirmGroup}>
                        <label>Confirm Appointment:</label>
                        <div>
                            <p>You have selected:</p>
                            <p>This time</p>
                            <p>on</p>
                            <p>This date</p>
                        </div>
                    </div>
                    <input type="submit" value="Schedule"/>
                </div>
            </form>
        </div>
    )
}

export default AppointmentForm;