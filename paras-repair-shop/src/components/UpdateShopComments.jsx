import React, { useEffect, useState } from 'react';
import { Link, navigate } from "@reach/router";
import axios from 'axios';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const UpdateShopComments = ({ selectedAppointment, mechanicComments }) => {
    const [comments, setComments] = useState(mechanicComments);

    const updateComments = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8080/api/appointments/' + selectedAppointment.id, {
            mechanicComments,
        }, [])
            .then(res => {
                navigate("/appointment-details");
            })
            .catch((err) => {
                console.log(err);
                // const { errors } = err.response.data;
                // const messages = Object.keys(errors).map(err => errors[err].message);
                // setValidations([...validations, messages])
                // setValidations(messages)
            })
    }

    return (
        <div>
            <h1>Update Comments:</h1>
            <form onSubmit={updateComments}>
                {/* {validations.map((message, idx) => <p style={{ color: "red" }} className="err" key={idx}>{message}</p>)} */}
                <div >
                    <label>Mechanic Comments:</label>
                    <div>
                        <textarea onChange={e => setComments(e.target.value)} col="50" row="30" value={mechanicComments}></textarea>
                    </div>
                </div>
                <input type="submit" value="Update" />

            </form>
        </div>

    )
}

export default UpdateShopComments;