import logo from './logo.svg';
import './App.css';
import { Router } from '@reach/router';
import HomePage from './views/HomePage'
import AppointmentPage from './views/AppointmentPage';

function App() {
  return (
    <div className="App">
      <Router>
        <HomePage path="/" />
        <AppointmentPage path="/schedule" />
      </Router>
    </div>
  );
}

export default App;
