import './App.scss';
import { Router } from '@reach/router';
import { useState } from 'react';
import HomePage from './views/HomePage';
import AppointmentPage from './views/AppointmentPage';
import AboutPage from './views/AboutPage';
import ServicesPage from './views/ServicesPage';
import LocationPage from './views/LocationPage';
import ContactPage from './views/ContactPage';
import ReviewPage from './views/ReviewPage';
import FaqPage from './views/FaqPage';
import AdminLogin from './views/AdminLogin';
import Dashboard from './views/Dashboard';
import DailyAppointmentsPage from './views/DailyAppointmentsPage';
import AppointmentDetailsPage from './views/AppointmentDetailsPage';
import ArchivePage from './views/ArchivePage';


function App() {

  const [appointments, setAppointments] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [dailyAppointments, setDailyAppointments] = useState([]);
  return (
    <div className="App">
      <Router>
        <HomePage path="/" />
        <AppointmentPage path="/schedule" />
        <AboutPage path="/about" />
        <ServicesPage path="/services" />
        <LocationPage path="/directions" />
        <ContactPage path="/contact" />
        <ReviewPage path="/reviews" />
        <FaqPage path="/faq" />
        <AdminLogin path="/admin" />
        <Dashboard
          path="/dashboard"
          appointments={appointments}
          setAppointments={setAppointments}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          dailyAppointments={dailyAppointments}
          setDailyAppointments={setDailyAppointments}
        />
        <DailyAppointmentsPage
          path="/daily-appointment"
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          dailyAppointments={dailyAppointments}
          setDailyAppointments={setDailyAppointments}
        />
        <AppointmentDetailsPage path="/appointment-details" />
        <ArchivePage path="/archive" />
      </Router>
    </div>
  );
}

export default App;
