import React, {useEffect} from 'react';
import NavBar from '../components/NavBar';
import styles from './AboutPage.module.css';
import camaro from '../static/images/camaro.jpg';
import mustang from '../static/images/ev-mustang.jpg';

const AboutPage = () => {

    return (
        <div>
            <h1 className={styles.titleBox2}>Latinos Auto Electric</h1>
            <NavBar/>
            <div className={styles.banner}>
                <h1>About Us</h1>
                <p>My parents began this repair shop back in XXXX. Our family has be serving the community for over XX years through our passion for everything automotive. We love working on vehicles of all types and helping out our community by fixing any kind of vehicle issue.</p>
            </div>
            <div className={styles.infoSection}>
                <p>My family built this shop from the ground up to help service cars for our neighbors. We work to this day as a family owned business looking to help out families near us.</p>
                <img src="" alt="founders family"/>
            </div>
            <div className={styles.infoSection}>
                <img src={camaro} alt="vintage car"/>
                <p>Our love of cars has no bounds. We regularly work on vintage vehicles and provide high-quality custom work for any vehicle that comes through our shop. </p>
            </div>
            <div className={styles.infoSection}>
                <p>We also can perform maintenance on all modern vehicles and can handle any maintenance and repairs to ensure your and your families safety.</p>
                <img src={mustang} alt="modern car"/>
            </div>
            <div>
                <h1>Meet our Staff</h1>
                <div class={styles.staffBox}>
                    <div>
                        <h3>Owner</h3>
                    </div>
                    <div>
                        <h3>Head Mechanic</h3>
                    </div>
                    <div>
                        <h3>Repair Specialist</h3>
                    </div>
                </div>
            </div>
            <h4>Contact us here with any questions or to schedule over the phone.</h4>
        </div>

    )
}

export default AboutPage;