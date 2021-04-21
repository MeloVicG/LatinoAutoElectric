import './App.scss';
import { Router } from '@reach/router';
import { useEffect, useState } from 'react';
import axios from "axios";
import HomePage from './views/HomePage';
import AppointmentPage from './views/AppointmentPage';
import AboutPage from './views/AboutPage';
import ServicesPage from './views/ServicesPage';
import ContactPage from './views/ContactPage';
import ReviewPage from './views/ReviewPage';
import FaqPage from './views/FaqPage';
import AdminLogin from './views/AdminLogin';
import Dashboard from './views/Dashboard';
import AppointmentDetailsPage from './views/AppointmentDetailsPage';
import ArchivePage from './views/ArchivePage';
import SearchAppointments from './views/SearchAppointments';
import UpdateAllFields from './components/UpdateAllFields';
import UpdateShopComments from './components/UpdateShopComments';
import SuccessPage from './views/SuccessPage';
import AddAdmin from './views/AddAdmin';



function App() {

  const [appointments, setAppointments] = useState([]);
  const [selectedId, setSelectedId] = useState("");
  const [selectedAppointment, setSelectedAppointment] = useState({});
  const [mechanicComments, setMechanicComments] = useState("");
  const [appointmentList, setAppointmentList] = useState([]);

  const [page, setPage] = useState(0);


  //if this works, need to move this to dashboard for when you first reach the admin stuff.
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
    <div className="App">
      <Router>
        <HomePage path="/" page={page} setPage={setPage} />
        <AppointmentPage
          path="/schedule"
          appointments={appointments}
          setAppointments={setAppointments}
          page={page}
          setPage={setPage}
        />
        <SuccessPage path='/success' />
        <AboutPage path="/about" page={page} setPage={setPage} />
        <ServicesPage path="/services" page={page} setPage={setPage} />
        <ContactPage path="/contact" />
        <ReviewPage path="/reviews" />
        <FaqPage path="/faq" page={page} setPage={setPage} />
        <AdminLogin path="/admin" />
        <Dashboard
          path="/dashboard"
          appointments={appointments}
          setAppointments={setAppointments}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
          page={page}
          setPage={setPage}
        />
        <AppointmentDetailsPage
          path="/appointment-details"
          selectedId={selectedId}
          setSelectedId={setSelectedId}
          selectedAppointment={selectedAppointment}
          setSelectedAppointment={setSelectedAppointment}
          appointments={appointments}
          setAppointments={setAppointments}
        />
        <UpdateAllFields
          path="/update-all-fields"
          selectedAppointment={selectedAppointment}
          setSelectedAppointment={setSelectedAppointment}
        />
        <UpdateShopComments
          path="/update-shop-comments"
        />
        <SearchAppointments
          path="/search"
          appointments={appointments}
          setAppointments={setAppointments}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
          appointmentList={appointmentList}
          setAppointmentList={setAppointmentList}
          page={page}
          setPage={setPage}
        />
        <ArchivePage
          path="/archive"
          appointments={appointments}
          setAppointments={setAppointments}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
          appointmentList={appointmentList}
          setAppointmentList={setAppointmentList}
          page={page}
          setPage={setPage}
        />
        <AddAdmin path="/register-admin"/>
      </Router>
    </div >
  );
}

export default App;
