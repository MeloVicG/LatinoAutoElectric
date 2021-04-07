// import styles from '../styles/GoogleMap.module.scss';
import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const MapContainer = () => {

    return (
        <iframe width="600" 
            height="350" 
            frameborder="0"
            style={{border:0}} 
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCOtx7HHjvK-8gn-0OGNnnrs1HT9RGWGXI&q=Latinos+Auto+Electric+427+E+Anaheim+Street,Long+Beach,California&zoom=13" 
            allowfullscreen>
        </iframe>
    )
}


export default MapContainer;
// ({
//     apiKey: 'AIzaSyCOtx7HHjvK-8gn-0OGNnnrs1HT9RGWGXI'
// });