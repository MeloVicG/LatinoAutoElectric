import React, { useState } from 'react';
import { navigate } from '@reach/router';
import styles from '../styles/AppointmentForm.module.scss';
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import axios from 'axios';

import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';


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
    const [serviceTypeArray, setServiceTypeArray] = useState([]);
    const [serviceType, setServiceType] = useState("");
    const [clientComments, setClientComments] = useState("");

    const [validations, setValidations] = useState([]);

    const [calDate, setCalDate] = useState(new Date());
    const [filteredAppointments, setFilteredAppointments] = useState([]);

    const [active, setActive] = useState('');
    const allTimes = ["7:00am", "8:00am", "9:00am", "10:00am", "11:00am", "12:00pm", "1:00pm", "2:00pm", "3:00pm", "4:00pm", "5:00pm"];
    const [times, setTimes] = useState(["7:00am", "8:00am", "9:00am", "10:00am", "11:00am", "12:00pm", "1:00pm", "2:00pm", "3:00pm", "4:00pm", "5:00pm"]);


    const calendarChange = (calDate) => {
        // if (calDate < new Date()) {
        //     console.log("set validation here!")
        // } else {
        setCalDate(calDate);
        setDate(calDate.toLocaleString().split(",")[0]);
        console.log("date: " + calDate.toLocaleString().split(",")[0]);
        let availableTimes = [];
        let scheduledAppointTimes = [];
        let appointsOnDate = appointments.filter(appoint => appoint.date === calDate.toLocaleString().split(",")[0]);

        for (let j = 0; j < appointsOnDate.length; j++) {
            scheduledAppointTimes.push(appointsOnDate[j].time);
        }
        for (let i = 0; i < allTimes.length; i++) {
            if (!scheduledAppointTimes.includes(allTimes[i])) {
                availableTimes.push(allTimes[i]);
            }
        }
        setTimes(availableTimes);
    };

    const handleTimeSelect = (time, idx) => {
        setActive(idx);
        setTime(time);
        console.log("time? " + time);
    };

    const addContact = (appointment) => {
        setAppointments([...appointments, appointment])
    };

    const handleCheckbox = (e) => {
        if (serviceTypeArray.includes(e.target.value)) {
            setServiceTypeArray(serviceTypeArray.filter(checkbox => checkbox !== e.target.value))
            console.log("off", e.target.value);
        } else {
            setServiceTypeArray([...serviceTypeArray, e.target.value]);
            console.log("on", e.target.value);
        };

        //
        let serviceTypeString = "";
        for (let i = 0; i < serviceTypeArray.length; i++) {
            if (serviceTypeString === "") {
                serviceTypeString = serviceTypeArray[i];
            } else {
                serviceTypeString = serviceTypeString + ", " + serviceTypeArray[i];
            }
        }
        setServiceType(serviceTypeString);
    }

    //uses HTML names attribute
    const sendEmail = (appointment) => {
        // appointment.preventDefault();
        console.log("sendEmail Function", appointment);
        console.log(process.env.REACT_APP_SERVICE_KEY);
        //need to hide all IDs
        emailjs.sendForm(process.env.REACT_APP_SERVICE_KEY, 'template_cww6u3m', appointment, process.env.REACT_APP_USER_EMAIL_API_KEY)
            .then((result) => {
                console.log('in sendEmail function', result.text);
            }, (error) => {
                console.log(error.text);
            });
    }


    const onSubmitHandler = (e) => {
        e.preventDefault();
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
            serviceType,
            clientComments
        };
        axios.post('http://localhost:8080/api/appointments', newContact)
            .then(res => {
                console.log("axios.post Response: ", res);
                addContact(res.data);
                sendEmail(e.target);
                navigate('/success');
            })
            .catch(err => {
                console.log(err.response)
                //             const {errors} = err.response.data;
                //             const messages = Object.keys(errors).map(error => errors[error].message);
                //             setErrorMessages(messages);
            });
    };

    return (
        <div>
            <form className={styles.appointmentForm} onSubmit={onSubmitHandler} >
                {validations.map((message, idx) => <p style={{ color: "red" }} className="err" key={idx}>{message}</p>)}
                <div className={styles.apFormTop}>
                    <label className={styles.formHeading}>Contact Info:</label>
                    <div className={styles.formSection}>
                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label>First Name: </label>
                                <div>
                                    <input type="text" name="firstName" onChange={e => setFirstName(e.target.value)} />
                                </div>
                            </div>
                            <div className={styles.formGroup}>
                                <label>Last Name:</label>
                                <div>
                                    <input type="text" name="lastName" onChange={e => setLastName(e.target.value)} />
                                </div>
                            </div>
                        </div>
                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label>Email:</label>
                                <div>
                                    <input type="email" name="email" onChange={e => setEmail(e.target.value)} />
                                </div>
                            </div>
                            <div className={styles.formGroup}>
                                <label>Phone Number:</label>
                                <div>
                                    <input type="text" name="phoneNumber" onChange={e => setPhone(e.target.value)} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <label className={styles.formHeading}>Available Appointment Times:</label>
                    <div className={styles.formSection}>
                        <div className={styles.formBalance}>
                            <div >
                                <label>Select Date:</label>
                                <Calendar onChange={calendarChange} name="date" value={calDate} />
                                <input type="hidden" name="formatDate" value={date}/>
                            </div>
                            <div >
                                <label>Select Time:</label>
                                {times.map((time, idx) =>
                                    <div onClick={e => handleTimeSelect(time, idx)} className={(idx === active ? styles.activeTimeBox : styles.timeBox)} key={idx}>
                                        <p>{time}</p>
                                        <input type="hidden" name={(idx === active ? "time": "timeOption")} value={time}/>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <label className={styles.formHeading}>Vehicle Info:</label>
                    <div className={styles.formSection}>
                        <div className={styles.formBalance}>
                            <div className={styles.formGroup}>
                                <label>Make:</label>
                                <input type="text" name="make" onChange={e => setMake(e.target.value)} />
                            </div>
                            <div className={styles.formGroup}>
                                <label>Model:</label>
                                <input type="text" name="model" onChange={e => setModel(e.target.value)} />
                            </div>
                            <div className={styles.formGroup}>
                                <label> Year:</label>
                                <input type="number" name="year" onChange={e => setYear(e.target.value)} />
                            </div>
                        </div>
                    </div>
                    <label className={styles.formHeading}>Service Info:</label>
                    <div className={styles.formSection}>
                        <div className={styles.formRow}>
                            <div >
                                <label>Reason for Visit:</label>
                                <div className={styles.serviceCheckboxes}>
                                    <div className={styles.serviceType} >
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
                                <textarea className={styles.formCommentsRight} name="comments" onChange={e => setClientComments(e.target.value)} col="100" row="30" placeholder="Please fill in any information that was listed as other here."></textarea>
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