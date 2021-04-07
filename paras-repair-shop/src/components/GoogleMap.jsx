// import styles from '../styles/GoogleMap.module.scss';
import React from 'react';

const MapContainer = () => {

    return (
        <iframe width="600" 
            title="Location Map Frame"
            height="350" 
            frameborder="0"
            style={{border:0}} 
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCOtx7HHjvK-8gn-0OGNnnrs1HT9RGWGXI&q=Latinos+Auto+Electric+427+E+Anaheim+Street,Long+Beach,California&zoom=13" 
            allowfullscreen>
        </iframe>
    )
}


export default MapContainer;
