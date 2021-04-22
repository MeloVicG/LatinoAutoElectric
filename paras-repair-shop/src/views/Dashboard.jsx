import { Link, navigate } from '@reach/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Display from '../components/Display';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styles from '../styles/Calendar.module.scss';
import AdminNavBar from '../components/AdminNavBar';

const Dashboard = ({ appointments, setAppointments, selectedId, setSelectedId, page, setPage }) => {

  const [validation, setValidation] = useState("");
  const [userResults, setUserResults] = useState([]);
  const [calDate, setCalDate] = useState(new Date());
  const [filteredAppointments, setFilteredAppointments] = useState([]);

  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    if (user && user.accessToken) {

      axios.get("http://localhost:8080/api/appointments/")
        .then(res => {
          let allAppointments = res.data;
          setAppointments(allAppointments);
          setPage(0);
        })
        .catch(err => {
          console.log("error part: " + err);
        })
    } else {
      navigate("/admin");
    }
  }, []);

  const calendarChange = (calDate) => {
    setCalDate(calDate);
    //filter is appointments for the day
    let filtered = [];
    appointments.map(appointment => {
      const newCalDateFormat = calDate.toLocaleString().split(",")[0];
      if (appointment.date === newCalDateFormat) {
        filtered.push(appointment);
      };
    });
    setFilteredAppointments(filtered);
  }

  const handleSelection = (id) => {
    setSelectedId(id);
    navigate("/appointment-details");
  }

  return (
    <div>
      <h1>Latinos Auto Electric Admin</h1>
      <Link to="/" style={{backgroundColor:"purple", marginLeft:"1500px"}}>Back Home</Link>
      <AdminNavBar page={page} />
      <h1 className={styles.title}>Calendar</h1>
      <div className={styles.calendarContainer}>
        <div className="result-calendar" >
          <Calendar onChange={calendarChange} value={calDate} />
        </div>
      </div>
      <div>
        <h3>Daily Schedule</h3>
        <div className={styles.dailyBox}>
          {filteredAppointments.length > 0 ?
            filteredAppointments.map((appoint) =>
              <div className={styles.appointmentGroup} onClick={() => handleSelection(`${appoint.id}`)} key={appoint.id}>
                <div className={styles.appointmentLeft}>
                  <p>{appoint.time}</p>
                </div>
                <div className={styles.appointmentRight}>
                  <p>{appoint.firstName} {appoint.lastName}</p>
                  <p>{appoint.phone}</p>
                </div>
              </div>
            ) : <div><p>Select A Date</p></div>
          }
        </div>
      </div>
    </div >
  )
}

export default Dashboard;