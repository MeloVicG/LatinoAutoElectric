import { Link } from "@reach/router";
import { useEffect, useState } from "react";
import axios from "axios";
import Display from "../components/Display";

const DailyAppointmentsPage = ({ selectedDate, setSelectedDate }) => {

    const [dailyAppointments, setDailyAppointments] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/api/appointments/date/" + selectedDate)
            .then((res) => {
                let dailyAppointments = res.data;
                setDailyAppointments(dailyAppointments);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <h1>Appointments for {selectedDate}</h1>
            <Display dailyAppointments={dailyAppointments} />
        </div>
    );
};

export default DailyAppointmentsPage;
