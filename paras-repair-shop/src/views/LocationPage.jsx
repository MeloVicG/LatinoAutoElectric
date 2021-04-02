import React, {useEffect} from 'react';
import NavBar from '../components/NavBar';
import mapPlaceholder from '../static/images/map-placeholder.PNG';


const LocationPage = () => {

    return (
        <div>
            <h1 className="titleBox-2">Latinos Auto Electric</h1>
            <NavBar/>
            <div className="banner">
                <h1>Location</h1>
                <div>
                    <img className="img3" src={mapPlaceholder} alt="map" />
                </div>
            </div>
        </div>

    )
}

export default LocationPage;