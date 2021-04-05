import React, {useEffect} from 'react';
import logo from '../static/images/hand-draw-logo.png';
import styles from './CarLogo.module.css';

const CarLogo = () => {

    return (
        <div>
            <img className={styles.carLogo} src={logo} alt="car logo"/>
        </div>
    )
}

export default CarLogo;
