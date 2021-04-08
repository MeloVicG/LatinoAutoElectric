import { Link } from '@reach/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Display from '../components/Display'

const Dashboard = () => {

    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/api/appointments/")
          .then(res => {
            let allAppointments = res.data;
            setAppointments(allAppointments);
          })
          .catch(err => {
            console.log(err);
          })
      }, []);

    return (
        <div>
            <h1>Current Scheduled Appointments</h1>
            <Display appointments={appointments}/>
        </div>
    )
}

export default Dashboard;