import NavBar from '../components/NavBar'
import styles from '../styles/FaqPage.module.scss'
import Footer from '../components/Footer'
import { Link } from '@reach/router';

const AboutPage = () => {
    return (
        <div className="wrapper">
                <h1 className={styles.titleBox}>Latinos Auto Electric</h1>
                <NavBar/>
            <div className={styles.container}>
                <div className={styles.faqBanner}>
                    <div>
                        <h1>FAQ</h1>
                        <h4>Questions?</h4>
                        <p>Where can I make an appointment?</p>
                        <p>When does the shop open?</p>
                        <p>Do I need to buy parts?</p>
                        <p>Is there positions available?</p>
                        <p>do I have to leave my car overnight?</p>
                    </div>
                    <div>
                        <h4>Answer:</h4>
                        <p>Appointments can be made on our <Link to="/schedule">schedule page</Link></p>
                        <p>We are open :
                            <br/> Weekdays 8am - 5pm
                            <br/>
                            Saturday 9am - 2pm
                            <br/>
                            Sunday Closed
                        </p>
                        <p>Parts are provided at the shop, if you would like to provide the part necessary contact our manager</p>
                        <p>There may be positions available, contact our manager for futher information</p>
                        <p>Your car may be left overnight depending on the repairs required</p>
                    </div>
                
                </div>
            </div>
                <Footer/>
        </div>
    )
}

export default AboutPage;