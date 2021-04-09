import { Link, navigate } from '@reach/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Display from '../components/Display';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Dashboard = ({ appointments, setAppointments, selectedDate, setSelectedDate, dailyAppointments, setDailyAppointments }) => {

  const [validation, setValidation] = useState("");
  const [userResults, setUserResults] = useState([]);
  const [calDate, setCalDate] = useState(new Date());
  const [filteredAppointments, setFilteredAppointments] = useState([]);

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

  const calendarChange = (calDate) => {
    setCalDate(calDate);
    let filtered = [];
    appointments.map(appointment => {
      const newCalDateFormat = calDate.toLocaleString().split(",")[0];
      if (appointment.date === newCalDateFormat) {
        filtered.push(appointment);
      };
    });
    setFilteredAppointments(filtered);
  }

  return (
    <div>
      <h1>Calendar</h1>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div className="result-calendar">
          <Calendar onChange={calendarChange} value={calDate} />
        </div>
        <div>
          <h3>Current Date Selected</h3>
          {filteredAppointments.length > 0 ?
            filteredAppointments.map((appoint) =>
              <div key={appoint.id}>
                <p>{appoint.id}</p>
                <p>{appoint.date}</p>
                <p>{appoint.time}</p>
                <p>{appoint.firstName} {appoint.lastName}</p>
              </div>
            ) : <div><p>Select A Date</p></div>
          }
        </div>
      </div>
    </div>
  )
}

export default Dashboard;