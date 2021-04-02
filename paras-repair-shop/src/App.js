import logo from './logo.svg';
import './App.css';
import { Router } from '@reach/router';
import HomePage from './views/HomePage'
import ServicePage from './views/ServicePage'
import AppointmentPage from './views/AppointmentPage';
import AboutPage from './views/AboutPage';
import ServicesPage from './views/ServicesPage';
import LocationPage from './views/LocationPage';
import ContactPage from './views/ContactPage';


function App() {
  return (
    <div className="App">
      <Router>
        <HomePage path="/" />
        <ServicePage path="/service" />
        <AppointmentPage path="/schedule" />
        <AboutPage path="/about" />
        <ServicesPage path="/services" />
        <LocationPage path="/directions" />
        <ContactPage path="/contact" />
      </Router>
    </div>
  );
}

export default App;
