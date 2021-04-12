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
import AppointmentDetailsPage from './views/AppointmentDetailsPage';
import ArchivePage from './views/ArchivePage';
import SearchAppointments from './views/SearchAppointments';
import UpdateAllFields from './components/UpdateAllFields';


function App() {

  const [appointments, setAppointments] = useState([]);
  const [selectedId, setSelectedId] = useState("");
  const [selectedAppointment, setSelectedAppointment] = useState({});

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
          selectedId={selectedId}
          setSelectedId={setSelectedId}
        />
        <AppointmentDetailsPage
          path="/appointment-details"
          selectedId={selectedId}
          setSelectedId={setSelectedId}
          selectedAppointment={selectedAppointment}
          setSelectedAppointment={setSelectedAppointment}
        />
        <UpdateAllFields
          path="/update-all-fields"
          selectedId={selectedId}
          setSelectedId={setSelectedId}
          selectedAppointment={selectedAppointment}
          setSelectedAppointment={setSelectedAppointment}
        />
        <SearchAppointments
          path="/search"
          appointments={appointments}
          setAppointments={setAppointments}
        />
        <ArchivePage path="/archive" />
      </Router>
    </div>
  );
}

export default App;
