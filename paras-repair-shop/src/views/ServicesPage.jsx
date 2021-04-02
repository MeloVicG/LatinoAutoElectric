import React, {useEffect} from 'react';
import NavBar from '../components/NavBar';

const ServicesPage = () => {

    return (
        <div>
            <h1 className="titleBox-2">Latinos Auto Electric</h1>
            <NavBar/>
            <div className="banner">
                <h1>Services</h1>
                <div className="categories">
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
            </div>
            <h4>Contact us here with any questions or to schedule over the phone.</h4>
        </div>

    )
}

export default ServicesPage;