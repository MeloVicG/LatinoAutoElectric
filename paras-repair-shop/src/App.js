import logo from './logo.svg';
import './App.css';
import { Router } from '@reach/router';
import HomePage from './views/HomePage'
import ServicePage from './views/ServicePage'
import AppointmentPage from './views/AppointmentPage';

function App() {
  return (
    <div className="App">
      <Router>
        <HomePage path="/" />
        <ServicePage path="/service" />
        <AppointmentPage path="/schedule" />
      </Router>
    </div>
  );
}

export default App;
