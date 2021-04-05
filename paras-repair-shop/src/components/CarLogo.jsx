import React, {useEffect} from 'react';
import styles from './CarLogo.module.css';
import logo from '../static/images/cool-logo.png';

const CarLogo = () => {

    return (
        <div>
            <img className={styles.carLogo} src={logo} alt="car logo"/>
        </div>

    )
}

export default CarLogo;