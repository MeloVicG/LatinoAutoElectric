import React, { useEffect } from 'react';
import styles from '../styles/Footer.module.scss';
import facebook from '../static/images/facebook.png'
import instagram from '../static/images/instagram.png'


const Footer = () => {
    return (
        <footer className="faqFooter" style={{ marginTop: "200px" }}>
            <img className={styles.facebook} src={facebook} alt="facebook_logo" />
            <img className={styles.instagram} src={instagram} alt="instagram_logo" />
            <div>
                <p>Not currently in use as a business site -- deployed only for demonstration.</p>
                <p>Please use only login information provide.</p>
                <p>Please don't use any personal information when testing. Creators aren't responsible for any personal information used in forms.</p>
            </div>
            <div>
                <p>made with:
                MySql / Sequelize,
                Express,
                React,
                NodeJS,
                    SaSS</p>
            </div>
        </footer>

    )
}

export default Footer;