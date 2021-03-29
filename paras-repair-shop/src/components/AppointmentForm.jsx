import React, { useState } from 'react';

const AppointmentForm = ({appointments, setAppointments}) => {

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
            <form className="appointmentForm" >
                {validations.map((message, idx) => <p style={{ color: "red" }} className="err" key={idx}>{message}</p>)}
                <div className="ap-form-top">
                    <div className="ap-form-left">
                        <div className="form-group">
                            <label>Select Date:</label>
                            <div>
                                <input type="date" onChange={e => setDate(e.target.value)}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Select Time:</label>
                            <div>
                                <input type="time" onChange={e => setTime(e.target.value)}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Select Vehicle Type:</label>
                            <div>
                                <select id="vehicle" onChange={e => setVehicleType(e.target.value)}>
                                    <option value=""></option>
                                    {optionList}
                                    <option value="other">Other - specify in comments</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Select Vehicle Year:</label>
                            <div>
                                <select id="vehicle" onChange={e => setVehicleType(e.target.value)}>
                                    <option value=""></option>
                                    <option value="2021">2021</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="ap-form-right">
                        <div className="form-group">
                            <label>Select Reason for Visit:</label>
                            <div>
                                <select id="vehicle" onChange={e => setVehicleType(e.target.value)}>
                                    <option value=""></option>
                                    <option value="Oil Change">Oil Change</option>
                                </select> 
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Additional Comments:</label>
                            <div>
                                <textarea onChange={e => setTime(e.target.value)} col="50" row="30" placeholder="Please fill in any information that was listed as other here."></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="confirm-group">
                    <label>Confirm Appointment:</label>
                    <div>
                        <p>You have selected:</p>
                        <p>This time</p>
                        <p>on</p>
                        <p>This date</p>
                    </div>
                    <div className="confirm-group">
                        <label>First Name:</label>
                        <input type="text" onChange={e => setFirstName(e.target.value)}/>
                    </div>
                    <div className="confirm-group">
                        <label>Last Name:</label>
                        <input type="text" onChange={e => setLastName(e.target.value)}/>
                    </div>
                    <div className="confirm-group">
                        <label>Email:</label>
                        <input type="email" onChange={e => setEmail(e.target.value)}/>
                    </div>
                    <div className="confirm-group">
                        <label>Phone Number:</label>
                        <input type="text" onChange={e => setPhone(e.target.value)}/>
                    </div>

                    <input type="submit" value="Schedule"/>
                </div>
            </form>
        </div>
    )
}

export default AppointmentForm;