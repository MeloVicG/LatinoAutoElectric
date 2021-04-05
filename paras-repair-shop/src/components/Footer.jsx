import React, {useEffect} from 'react';
import styles from './Footer.module.css';
import facebook from '../static/images/facebook.png'
import instagram from '../static/images/instagram.png'


const Footer = () => {
    return (
        <div className="wrapper">
            <footer style={{ backgroundColor: "#00b0f4" }}>
                <img className={styles.facebook}src={facebook} alt="facebook_logo"/>
                <img className={styles.instagram}src={instagram} alt="instagram_logo"/>
                <div>
                    <p>made by:</p>
                        <p>Victor Gargurevich</p>
                            <p>Spence Hyuck</p>
                </div>
                <div>
                    made with:
                        MERN
                </div>
            </footer>
        </div>
    )
}

export default Footer;