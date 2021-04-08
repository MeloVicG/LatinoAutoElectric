import { Link, navigate } from '@reach/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Display from '../components/Display'

const Dashboard = () => {

  const [appointments, setAppointments] = useState([]);
  const [selectedDate, setSelectedDate] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/appointments/")
      .then(res => {
        let allAppointments = res.data;
        setAppointments(allAppointments);
        setSelectedDate([]);
      })
      .catch(err => {
        console.log(err);
      })
  }, []);

  const handleDateSelection = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setSelectedDate(e.target.value);
    findAppointments();
  }

  const findAppointments = () => {
    console.log(selectedDate);
    navigate("/daily-appointment");

  }
  const handleDateCheck = (e) => {
    console.log("selected date: " + selectedDate);
  }

  return (
    <div>
      <h1>Calendar</h1>
      <div>
        <button onClick={e => handleDateSelection(e)} value="03 May 2021">03 May 2021</button>
        <button onClick={e => handleDateCheck(e)} >Check date</button>
      </div>
      <div>
        <p onClick={e => handleDateSelection(e)}>05 May 2021</p>
      </div>
    </div>
  )
}

export default Dashboard;