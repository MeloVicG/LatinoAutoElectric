import React, { useState } from 'react';
import { navigate } from '@reach/router'
import styles from '../styles/AppointmentForm.module.scss';
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import axios from 'axios';


const AppointmentForm = ({ appointments, setAppointments, }) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [make, setMake] = useState("");
    const [model, setModel] = useState("");
    const [year, setYear] = useState("");
    const [serviceType, setServiceType] = useState([]);
    const [clientComments, setClientComments] = useState("");

    const [validations, setValidations] = useState([]);

    const addContact = (appointment) => {
        setAppointments([...appointments, appointment])
    }

    const handleCheckbox = (e) => {
        if (serviceType.includes(e.target.value)) {
            setServiceType(serviceType.filter(checkbox => checkbox !== e.target.value))
        } else {
            setServiceType([...serviceType, e.target.value]);
        }
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();
        let serviceTypeString = "";
        serviceType.map(checkbox => {
            if (serviceTypeString === "") {
                serviceTypeString = serviceTypeString + checkbox;
            } else {
                serviceTypeString = serviceType + ", " + checkbox;
            }
        })
        const newContact = {
            firstName,
            lastName,
            email,
            phone,
            date,
            time,
            make,
            model,
            year,
            serviceTypeString,
            clientComments
        }
        axios.post('http://localhost:8080/api/appointments', newContact)
            .then(res => {
                console.log("axios.post Response: ", res);
                addContact(res.data)
                navigate('/dashboard')
            })
            .catch(err => {
                console.log(err.response)
                //             const {errors} = err.response.data;
                //             const messages = Object.keys(errors).map(error => errors[error].message);
                //             setErrorMessages(messages);
            })
    }

    return (
        <div>
            <form className={styles.appointmentForm} onSubmit={onSubmitHandler} >
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
                    <label className={styles.formHeading}>Available Appointment Times:</label>
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
                                <input type="text" onChange={e => setMake(e.target.value)} />
                            </div>
                            <div className={styles.formGroup}>
                                <label>Model:</label>
                                <input type="text" onChange={e => setModel(e.target.value)} />
                            </div>
                            <div className={styles.formGroup}>
                                <label> Year:</label>
                                <input type="number" onChange={e => setYear(e.target.value)} />
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
                                        <div>
                                            <input type="checkbox" name="battery" value="Battery Service" onChange={handleCheckbox} />
                                            <label htmlFor="battery"> Battery Service </label>
                                        </div>
                                        <div>
                                            <input type="checkbox" name="break" value="Break Service" onChange={handleCheckbox} />
                                            <label htmlFor="break"> Break Service </label>
                                        </div>
                                        <div>
                                            <input type="checkbox" name="oilChange" value="Oil change" onChange={handleCheckbox} />
                                            <label htmlFor="oilChange"> Oil Change </label>
                                        </div>
                                        <div>
                                            <input type="checkbox" name="tireChange" value="Tire Change" onChange={handleCheckbox} />
                                            <label htmlFor="tireChange"> Tire Change </label>
                                        </div>
                                        <div>
                                            <input type="checkbox" name="transmission" value="Transmission Service" onChange={handleCheckbox} />
                                            <label htmlFor="transmission"> Transmission Service </label>
                                        </div>
                                        <div>
                                            <input type="checkbox" name="tuneUp" value="Tune-up" onChange={handleCheckbox} />
                                            <label htmlFor="tuneUp"> Tune-up </label>
                                        </div>
                                    </div>
                                    <div className={styles.serviceType}>
                                        <div>
                                            <input type="checkbox" name="ACRepair" value="AC Repair" onChange={handleCheckbox} />
                                            <label htmlFor="ACRepair"> AC Repair </label>
                                        </div>
                                        <div>
                                            <input type="checkbox" name="beltReplacement" value="Belt Replacement" onChange={handleCheckbox} />
                                            <label htmlFor="beltReplacement"> Belt Replacement </label>
                                        </div>
                                        <div>
                                            <input type="checkbox" name="hoseReplacement" value="Hose Replacement" onChange={handleCheckbox} />
                                            <label htmlFor="hoseReplacement"> Hose Replacement </label>
                                        </div>
                                        <div>
                                            <input type="checkbox" name="collisionRepair" value="Collision Repair" onChange={handleCheckbox} />
                                            <label htmlFor="collisionRepair"> Collision Repair </label>
                                        </div>
                                        <div>
                                            <input type="checkbox" name="headlightRepair" value="Headlight Repair" onChange={handleCheckbox} />
                                            <label htmlFor="headlightRepair"> Headlight Repair </label>
                                        </div>
                                    </div>
                                    <div className={styles.serviceType}>
                                        <div>
                                            <input type="checkbox" name="vintageParts" value="Vintage Parts" onChange={handleCheckbox} />
                                            <label htmlFor="vintageParts"> Vintage Parts </label>
                                        </div>
                                        <div>
                                            <input type="checkbox" name="paint" value="Paint" onChange={handleCheckbox} />
                                            <label htmlFor="paint"> Paint </label>
                                        </div>
                                        <div>
                                            <input type="checkbox" name="other" value="Other" onChange={handleCheckbox} />
                                            <label htmlFor="other"> Other </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.formComments}>
                                <label className={styles.formCommentsLeft}>Additional Comments:</label>
                                <textarea className={styles.formCommentsRight} onChange={e => setTime(e.target.value)} col="100" row="30" placeholder="Please fill in any information that was listed as other here."></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={styles.confirmGroup}>
                        <label className={styles.confirmLabel}>Confirm Appointment:</label>
                        <div>
                            <p>You have selected:</p>
                            <p>{time}</p>
                            <p>on</p>
                            <p>{date}</p>
                        </div>
                    </div>
                    <input className={styles.submit} type="submit" value="Schedule" />
                </div>
            </form>
        </div>
    )
}

export default AppointmentForm;