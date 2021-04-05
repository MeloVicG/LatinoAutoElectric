import React, { Static } from 'react';
import NavBar from '../components/NavBar';
import styles from '../styles/ServicesPage.module.scss';

const ServicesPage = () => {

    return (
        <div className="wrapper">
            <h1 className={styles.titleBox2} >Latinos Auto Electric</h1>
            <NavBar/>
            <div className={styles.banner}>
                <h1>Services</h1>
                <div className={styles.categories}>
                    <div>
                        <h3>Maintenance</h3>
                        <ul>
                            <li>Battery Service</li>
                            <li>Break Service</li>
                            <li>Oil Change Service</li>
                            <li>Tire Change Service</li>
                            <li>Transmission Service</li>
                            <li>Tune-up</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Repair</h3>
                        <ul>
                            <li>Air Condition Repair</li>
                            <li>Belts and Hose Replacements</li>
                            <li>Collision Repair</li>
                            <li>Headlight Repair</li>
                            <li>Suspension Repair</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Custom</h3>
                        <ul>
                            <li>Vintage Parts</li>
                            <li>Paint</li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
                <div className={styles.serviceMidBox}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aliquid praesentium atque nisi suscipit corrupti sapiente quod iure, enim vero et quia repellat, nemo at. Eos culpa maiores illum architecto!</p>
                </div>
            </div>
            <h4 className={styles.footNote}>Contact us here with any questions or to schedule over the phone.</h4>
        </div>

    )
}

export default ServicesPage;