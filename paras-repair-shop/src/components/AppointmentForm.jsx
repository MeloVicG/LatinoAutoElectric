import React, { useState } from 'react';
import styles from '../styles/AppointmentForm.module.scss';
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';


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
    for (let i = 0; i < vehicleList.length; i++) {
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
                                    <input type="text" onChange={e => setFirstName(e.target.value)} />
                                </div>
                            </div>
                            <div className={styles.formGroup}>
                                <label>Last Name:</label>
                                <div>
                                    <input type="text" onChange={e => setLastName(e.target.value)} />
                                </div>
                            </div>
                        </div>
                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label>Email:</label>
                                <div>
                                    <input type="email" onChange={e => setEmail(e.target.value)} />
                                </div>
                            </div>
                            <div className={styles.formGroup}>
                                <label>Phone Number:</label>
                                <div>
                                    <input type="text" onChange={e => setPhone(e.target.value)} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <label className={styles.formHeading}>Appointment Time:</label>
                    <div className={styles.formSection}>
                        <div className={styles.formBalance}>
                            <div >
                                <label>Select Date:</label>
                                <Calendar onChange={e => setDate(e.target.value)} />
                            </div>
                            <div>
                                <label>Select Time:</label>
                                <div>
                                    <input type="time" onChange={e => setTime(e.target.value)} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <label className={styles.formHeading}>Vehicle Info:</label>
                    <div className={styles.formSection}>
                        <div className={styles.formBalance}>
                            <div className={styles.formGroup}>
                                <label>Make:</label>
                                <input type="text" onChange={e => setPhone(e.target.value)} />
                            </div>
                            <div className={styles.formGroup}>
                                <label>Model:</label>
                                <input type="text" onChange={e => setPhone(e.target.value)} />
                            </div>
                            <div className={styles.formGroup}>
                                <label> Year:</label>
                                <input type="number" onChange={e => setPhone(e.target.value)} />
                            </div>
                        </div>
                    </div>
                    <label className={styles.formHeading}>Service Info:</label>
                    <div className={styles.formSection}>
                        <div className={styles.formRow}>
                            <div >
                                <label>Reason for Visit:</label>
                                <div className={styles.serviceCheckboxes}>
                                    <div className={styles.serviceType}>
                                        {/* <select id="vehicle" onChange={e => setVehicleType(e.target.value)}>
                                            <option value=""></option>
                                            <option value="Oil Change">Oil Change</option>
                                        </select>  */}
                                        <div>
                                            <input type="checkbox" name="battery" value="battery" />
                                            <label for="vehicle1"> Battery Service </label>
                                        </div>
                                        <div>
                                            <input type="checkbox" name="vehicle2" value="Car" />
                                            <label for="vehicle2"> Break Service </label>
                                        </div>
                                        <div>
                                            <input type="checkbox" name="vehicle3" value="Boat" />
                                            <label for="vehicle3"> Oil Change </label>
                                        </div>
                                        <div>
                                            <input type="checkbox" name="battery" value="battery" />
                                            <label for="vehicle1"> Battery Service </label>
                                        </div>
                                        <div>
                                            <input type="checkbox" name="vehicle2" value="Car" />
                                            <label for="vehicle2"> Break Service </label>
                                        </div>
                                        <div>
                                            <input type="checkbox" name="vehicle3" value="Boat" />
                                            <label for="vehicle3"> Oil Change </label>
                                        </div>
                                    </div>
                                    <div className={styles.serviceType}>
                                        <div>
                                            <input type="checkbox" name="battery" value="battery" />
                                            <label for="vehicle1"> Battery Service </label>
                                        </div>
                                        <div>
                                            <input type="checkbox" name="vehicle2" value="Car" />
                                            <label for="vehicle2"> Break Service </label>
                                        </div>
                                        <div>
                                            <input type="checkbox" name="vehicle3" value="Boat" />
                                            <label for="vehicle3"> Oil Change </label>
                                        </div>
                                        <div>
                                            <input type="checkbox" name="battery" value="battery" />
                                            <label for="vehicle1"> Battery Service </label>
                                        </div>
                                        <div>
                                            <input type="checkbox" name="vehicle2" value="Car" />
                                            <label for="vehicle2"> Break Service </label>
                                        </div>
                                    </div>
                                    <div className={styles.serviceType}>
                                        <div>
                                            <input type="checkbox" name="battery" value="battery" />
                                            <label for="vehicle1"> Battery Service </label>
                                        </div>
                                        <div>
                                            <input type="checkbox" name="vehicle2" value="Car" />
                                            <label for="vehicle2"> Break Service </label>
                                        </div>
                                    </div>
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
                        <label className={styles.confirmLabel}>Confirm Appointment:</label>
                        <div>
                            <p>You have selected:</p>
                            <p>This time</p>
                            <p>on</p>
                            <p>This date</p>
                        </div>
                    </div>
                    <input className={styles.submit} type="submit" value="Schedule" />
                </div>
            </form>
        </div>
    )
}

export default AppointmentForm;