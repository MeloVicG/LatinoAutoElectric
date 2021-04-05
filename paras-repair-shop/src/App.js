import logo from './logo.svg';
import './App.scss';
import { Router } from '@reach/router';
import HomePage from './views/HomePage';
import AppointmentPage from './views/AppointmentPage';
import AboutPage from './views/AboutPage';
import ServicesPage from './views/ServicesPage';
import LocationPage from './views/LocationPage';
import ContactPage from './views/ContactPage';
import ReviewPage from './views/ReviewPage';
import FaqPage from './views/FaqPage';


function App() {
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
      </Router>
    </div>
  );
}

export default App;
